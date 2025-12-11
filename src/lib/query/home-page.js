export const HOME_QUERY = `
query HeaderBlock{
  header: allHeaderBlock{
    _id
    image{
      asset{
        url
        altText
      }
    }
  }

  news: allNews(limit: 4){
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
  
  gallery: allGalleryElement(limit: 3){
    _id
    _createdAt
    title
    date
    image{
      asset{
        url
        altText
      }
    }
  }
}
`;
