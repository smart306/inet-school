"use server";
import { FOOTER_QUERY } from "../query/footer-page";

export async function getFooterPage() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SANITY_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: FOOTER_QUERY,
      }),
      next: { revalidate: 150 }, // кешування/рефетч: налаштуйте згідно потреб
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch home page data: ${response.status}`);
    }

    const { data } = await response.json();

    if (!data) {
      throw new Error("No data returned from home page query");
    }

    return {
      footer: data.footer?.[0] || [],
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return { footer: null };
  }
}
