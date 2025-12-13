export const ARCHIVE_QUERY = `{
archive:  allArchivePage{
    sections{
      title, 
      archive_files{
        file{
          asset{
            url
          }
        }
        author{
          full_name, 
          image{
            asset{
              url
            }
          }
          bio
        }
      }
    }
  }
}`;