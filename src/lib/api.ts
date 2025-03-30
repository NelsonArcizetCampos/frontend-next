import { DriveFile } from '@/lib/types'; // Adjust the path as needed

export async function fetchImages(): Promise<DriveFile[]> {
  const WORKER_URL =
    process.env.WORKER_URL ||
    'https://driver-worker.comrade-zhukov.workers.dev/';

  try {
    const res = await fetch(WORKER_URL);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.files || [];
  } catch (error) {
    console.error('Failed to fetch images:', error);
    return [];
  }
}
