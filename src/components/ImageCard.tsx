'use client';

import Image from 'next/image';

export interface DriveFile {
  id: string;
  name: string;
}

export default function ImageCard({ file }: { file: DriveFile }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-out">
      <div className="w-full [aspect-ratio:9/16] bg-white flex items-center justify-center">
        <Image
          src={`/api/image?id=${file.id}`}
          alt={`Image: ${file.name}`}
          fill
          className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/fallback-image.jpg';
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm font-medium line-clamp-2">
          {file.name}
        </p>
      </div>
    </div>
  );
}
