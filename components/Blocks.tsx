import type { ReactNode } from "react";
import type { Block } from "@/lib/content";
import { RichText } from "./RichText";

export function Blocks({ blocks, after = {} }: { blocks: Block[]; after?: Record<string, ReactNode> }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.t === "h2") {
          return (
            <div key={`${block.text}-${index}`}>
              <h2
                id={block.id}
                className="mt-16 scroll-mt-8 border-t border-border pt-10 font-display text-3xl text-brand-deep md:text-4xl"
              >
                {block.text}
              </h2>
              {block.id ? after[block.id] : null}
            </div>
          );
        }
        if (block.t === "h3") {
          return (
            <h3 key={`${block.text}-${index}`} className="mt-8 font-display text-2xl text-brand-primary">
              {block.text}
            </h3>
          );
        }
        if (block.t === "ul" || block.t === "ol") {
          const Tag = block.t === "ol" ? "ol" : "ul";
          return (
            <Tag
              key={`${block.t}-${index}`}
              className={`measure mt-4 space-y-2 pl-5 leading-relaxed ${block.t === "ol" ? "list-decimal" : "list-disc"}`}
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Tag>
          );
        }
        return <RichText key={`${block.text.slice(0, 24)}-${index}`} text={block.text} />;
      })}
    </>
  );
}
