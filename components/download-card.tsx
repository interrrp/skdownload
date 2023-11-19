import { DownloadIcon, LucideIcon } from "lucide-react";
import Link from "next/link";

import CopyText from "@/components/copy-text";

type DownloadCardProps = {
  name: string;
  icon: LucideIcon;
  downloadURL: string;
  sha256Digest: string;
};

export default function DownloadCard({
  name,
  icon: Icon,
  downloadURL,
  sha256Digest,
}: DownloadCardProps) {
  return (
    <section className="p-8 border hover:border-orange-400 hover:bg-gradient-to-b hover:bg-orange-400/10 duration-100 rounded-md flex flex-col justify-between gap-4 w-full lg:max-w-lg max-w-xs">
      <div className="flex items-center gap-3">
        <Icon />
        <h2 className="md:text-2xl text-xl font-semibold">{name}</h2>

        <Link
          href={downloadURL}
          aria-label={`Download SKlauncher ${name}`}
          className="ml-auto"
        >
          <DownloadIcon />
        </Link>
      </div>

      <div className="space-y-1">
        <label className="text-zinc-400">SHA256 digest (copy)</label>
        <CopyText text={sha256Digest} />
      </div>
    </section>
  );
}
