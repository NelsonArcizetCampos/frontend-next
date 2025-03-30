import { DriveFile } from '@/lib/types';

export async function fetchImages(): Promise<DriveFile[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const API_ROUTE = '/api/images';

  try {
    const res = await fetch(`${baseUrl}${API_ROUTE}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch images: HTTP status ${res.status}`);
    }

    const data = await res.json();
    return data.files || [];
  } catch (error) {
    console.error('Failed to fetch images:', error);
    return [];
  }
}
