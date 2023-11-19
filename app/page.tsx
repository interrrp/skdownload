import DownloadCard from "@/components/download-card";
import { Grid2X2Icon, PackageIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="md:p-16 p-8 flex flex-col justify-center items-center h-full">
      <h1 className="md:text-3xl text-2xl font-semibold mb-8">
        Download SKlauncher 3.12
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        <DownloadCard
          name="Universal (JAR)"
          icon={PackageIcon}
          downloadURL="https://skmedix.pl/binaries/_/SKlauncher-3.1.2.jar"
          sha256Digest="627b807380dab8455cd04ba07cdb5a70a7c6f5d510c64296456f41588b60201a"
        />

        <DownloadCard
          name="Windows (64-bit)"
          icon={Grid2X2Icon}
          downloadURL="https://skmedix.pl/binaries/_/x64/SKlauncher-3.1.2.5.exe"
          sha256Digest="6c974aa57734ff98a88b403058ebbc281a7deb311886c4e1697e59a192afc542"
        />
      </div>
    </main>
  );
}
