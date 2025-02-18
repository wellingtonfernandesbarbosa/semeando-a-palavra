import ReactMarkdown from "react-markdown";

export default function MarkdownToText({ children }: { children: string }) {
  return (
    <div>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
