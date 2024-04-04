import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-4xl ">
      <div
        className={`max-w-4xl prose prose-neutral ${markdownStyles["markdown"]}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
