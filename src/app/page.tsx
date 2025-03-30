import { fetchImages } from '@/lib/api';
import ImageCard from '@/components/ImageCard';

export default async function GalleryPage() {
  const files = await fetchImages();

  return (
    <main className="max-w-6xl mx-auto p-5">
      {files.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          Loading images...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {files.map((file) => (
            <ImageCard key={file.id} file={file} />
          ))}
        </div>
      )}
    </main>
  );
}
