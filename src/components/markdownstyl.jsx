import Link from "next/link";
import Markdown from "react-markdown";

export default function MarkDownStyl({children, className}){
    return (
      <div className={className}>
        <Markdown
          components={{
            p: ({ children }) => <p className="text-green-400!">{children}</p>,
            li: ({ children }) => (
              <li className="text-green-400">{children}</li>
            ),
            a: ({ children, href, target }) => (
              <Link
                href={href}
                target={target ?? "_blank"}
                className="text-red-500"
              >
                {children}
              </Link>
            ),
          }}
        >
          {children}
        </Markdown>
      </div>
    );

}