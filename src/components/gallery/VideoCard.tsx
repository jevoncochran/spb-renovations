"use client";

import MuxPlayer from "@mux/mux-player-react";
import type { GalleryVideo } from "@/lib/data/gallery";

export default function VideoCard({ video }: { video: GalleryVideo }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-zinc-800 font-semibold text-sm md:hidden">{video.title}</p>
      <div className="rounded-lg overflow-hidden bg-zinc-900 aspect-[9/16] w-full md:max-w-sm md:mx-auto">
        <MuxPlayer
          playbackId={video.playbackId}
          accentColor="#C9A227"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <p className="text-zinc-800 font-semibold text-sm hidden md:block">{video.title}</p>
    </div>
  );
}
