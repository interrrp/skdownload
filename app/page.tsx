import { Grid2X2Icon, PackageIcon } from "lucide-react";

import DownloadCard from "@/components/download-card";

export default function Home() {
  return (
    <main className="md:p-16 p-8 flex flex-col justify-center items-center h-full">
      <h1 className="md:text-3xl text-2xl font-semibold mb-8">
        Download SKlauncher 3.2
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        <DownloadCard
          name="Windows (64-bit)"
          icon={Grid2X2Icon}
          downloadURL="https://skmedix.pl/binaries/_/x64/SKlauncher-3.2.exe"
          sha256Digest="05ae2f0dd61ef10019b94c200e8df192b767bb4cc24a7e7b329ab43cc9c74caf"
        />

        <DownloadCard
          name="Universal (MacOS/Linux) (JAR)"
          icon={PackageIcon}
          downloadURL="https://skmedix.pl/binaries/_/SKlauncher-3.2.jar"
          sha256Digest="f7d3e01dcfc001cc80a988c518d4358955842d140054214d1367972c5c543350"
        />
      </div>
    </main>
  );
}
