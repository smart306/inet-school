"use server";
import { ARCHIVE_QUERY } from "../query/archive-page";

export async function getArchive() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SANITY_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ARCHIVE_QUERY,
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
      archive: data.archive || [],
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return { archive: null };
  }
}