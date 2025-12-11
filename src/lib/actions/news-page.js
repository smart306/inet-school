import { ARTICLE_QUERY, NEWS_QUERY } from "../query/news-page";

export async function getNews() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SANITY_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: NEWS_QUERY,
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
      news: data.news || null,
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return { news: [] };
  }
}

export async function getArticle(slug) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SANITY_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ARTICLE_QUERY(slug)
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
      article: data.article[0] || null,
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return { article: [] };
  }
}