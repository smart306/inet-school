export const TEACHERS_QUERY = `
{
  teachers: allPerson{
    _id
    slug{
      current
    }
    image{
      asset{
        url
      }
    }
    full_name
  }
}
`;
export const BIO_QUERY = (slug) => `
    {
  bio: allPerson(where: {
    slug: {
      current: {
        eq: "${slug}"
      }
    }
  }){
    full_name,
    position, 
    class_teacher, 
    subjects{
      title
    }
    category, 
    started_working, 
    image{
      asset{
        url
      }
    }
  }
}`;