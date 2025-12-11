export const FOOTER_QUERY = `
{
footer: allFooterBlock{
    _id
    _type
    _createdAt
    _updatedAt
    _rev
    _key
    phone
    email
    address
  }
}
`;