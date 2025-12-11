import MarkDownStyl from "@/components/markdownstyl";
import { getArticle } from "@/lib/actions/news-page";
import Link from "next/link";
import Markdown from "react-markdown";

export default async function ArticlePage({params}){
    const {slug} = await params;
    const{ article } = await getArticle(slug);
    return (
      <section className="pt-35">
        <div className="my-container">
          <h1>{article.title}</h1>
          <p>{article.author}</p>
          <p>{article.data}</p>
        <MarkDownStyl>{article.body}</MarkDownStyl>
        </div>
      </section>
    );
}

/*description,
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
}`;*/