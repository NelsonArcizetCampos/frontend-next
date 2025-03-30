import { DriveFile } from '@/lib/types';

export async function fetchImages(): Promise<DriveFile[]> {
  const IMAGE_PROXY_URL = process.env.NEXT_PUBLIC_IMAGE_PROXY_URL;

  if (!IMAGE_PROXY_URL) {
    throw new Error('Missing NEXT_PUBLIC_IMAGE_PROXY_URL environment variable');
  }

  try {
    const res = await fetch(`${IMAGE_PROXY_URL}/files`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.files || [];
  } catch (error) {
    console.error('Failed to fetch images:', error);
    return [];
  }
}
