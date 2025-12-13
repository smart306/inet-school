"use server";
import { BIO_QUERY, TEACHERS_QUERY } from "../query/teacher-page";

export async function getTeachers() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SANITY_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: TEACHERS_QUERY,
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
      teachers: data.teachers || null
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return { teachers: [] };
  }
}

export async function getBio(slug) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SANITY_API_URL}`, {
     method: "POST",
    headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             query: BIO_QUERY(slug)
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
      bio: data.bio[0] || null
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return { bio: [] };
  }
}