"use client";

type CopyTextProps = {
  text: string;
};

export default function CopyText({ text }: CopyTextProps) {
  return (
    <button
      className="py-2 px-3 bg-zinc-900 hover:bg-zinc-800 duration-100 rounded-md block text-ellipsis overflow-hidden whitespace-nowrap w-full"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      {text}
    </button>
  );
}
