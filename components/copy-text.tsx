"use client";

type CopyTextProps = {
  text: string;
  cutAt?: number;
};

export default function CopyText({ text, cutAt }: CopyTextProps) {
  return (
    <button
      className="py-2 px-3 bg-zinc-900 hover:bg-zinc-800 duration-100 rounded-md block"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      {cutAt ? `${text.slice(0, cutAt)}...` : text}
    </button>
  );
}
