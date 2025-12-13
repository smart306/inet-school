import Link from "next/link";
import Markdown from "react-markdown";

export default function MarkDownStyl({children, className}){
    return (
      <div className={className}>
        <Markdown
          components={{
            p: ({ children }) => <p className="text-black! text-[16px]!">{children}</p>,
            li: ({ children }) => (
              <li className="text-black! font-bold!">{children}</li>
            ),
            a: ({ children, href, target }) => (
              <Link
                href={href}
                target={target ?? "_blank"}
                className="text-blue-500 underline"
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