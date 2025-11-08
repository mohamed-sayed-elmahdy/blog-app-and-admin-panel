import ReactMarkdown from "react-markdown";
import CodeBlock from "@/components/interviews/CodeBlock";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
function Button({ children }) {
  return (
    <button className="bg-blue-500 text-white px-3 py-1 rounded">
      {children}
    </button>
  );
}

export default function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
    rehypePlugins={[rehypeRaw, rehypeSanitize] }
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <CodeBlock
              language={match[1]}
              value={String(children).replace(/\n$/, "")}
           
            />
          ) : (
            <code className=" px-1 rounded" {...props}>
              {children}
            </code>
          );
        },
        Button: ({ node, ...props }) => <Button {...props} />
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
