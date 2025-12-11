export const NEWS_QUERY = `
    {
    news: allNews{
    _id
    _createdAt
    slug{
      current
    }
    title
    description
    image{
      asset{
        url
        altText
      }
    }
    author{
      full_name
      image{
        asset{
          url
          altText
        }
      }
    }
  }
    }
`;

export const ARTICLE_QUERY = (slug) => `
    {
  article: allNews(where: {
    slug: {
      current: {
        eq: "${slug}"
      }
    }
  }){
    title,
    description,
    image{
      asset{
        url
      }
    },
    video{
      file{
        asset{
          url
        }
      },
      caption
    },
    createDate: _createdAt,
    body,
    author{
      full_name,
      image{
        asset{
          url
        }
      },
      bio
    },
    gallery{
      ... on Image{
        asset{
          url
        }
      },
      ... on Video{
        file{
          asset{
            url
          }
        },
        caption
      }
    }
  }
}`;