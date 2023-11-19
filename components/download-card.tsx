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
    <section className="p-8 border w-fit rounded-md space-y-4">
      <div className="flex items-center gap-3 w-full">
        <Icon />
        <h2 className="text-2xl font-semibold">{name}</h2>

        <Link href={downloadURL} className="ml-auto">
          <DownloadIcon />
        </Link>
      </div>

      <div className="space-y-1">
        <label className="text-zinc-500">SHA256 digest</label>
        <CopyText text={sha256Digest} cutAt={30} />
      </div>
    </section>
  );
}
