"use server";

import { HOME_QUERY } from "../query/home-page";

export async function getHomePage() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SANITY_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: HOME_QUERY,
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

    return { header: data.header[0] || null, news: data.news || [] };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return { header: null, news: [] };
  }
}
