import { NextResponse } from 'next/server';

export async function GET() {
  const { IMAGE_PROXY_URL, API_SECRET_KEY } = process.env;

  if (!IMAGE_PROXY_URL || !API_SECRET_KEY) {
    return NextResponse.json(
      { error: 'Environment variables are not properly set.' },
      { status: 500 }
    );
  }

  try {
    const workerResponse = await fetch(`${IMAGE_PROXY_URL}/files`, {
      headers: {
        'X-API-Key': API_SECRET_KEY,
      },
    });

    if (!workerResponse.ok) {
      throw new Error(
        `Worker responded with status ${workerResponse.status}: ${workerResponse.statusText}`
      );
    }

    const data = await workerResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching data from the worker:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from the worker.' },
      { status: 500 }
    );
  }
}
