export const GALLERY_QUERY = `{
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
}`;

