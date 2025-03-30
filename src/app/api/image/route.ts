import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { IMAGE_PROXY_URL, API_SECRET_KEY } = process.env;
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  // Same environment check as images route
  if (!IMAGE_PROXY_URL || !API_SECRET_KEY) {
    return NextResponse.json(
      { error: 'Environment variables are not properly set.' },
      { status: 500 }
    );
  }

  // Same parameter validation pattern
  if (!id) {
    return NextResponse.json(
      { error: 'Missing image ID parameter.' },
      { status: 400 }
    );
  }

  try {
    // Same fetch pattern as images route
    const workerResponse = await fetch(`${IMAGE_PROXY_URL}/image?id=${id}`, {
      headers: {
        'X-API-Key': API_SECRET_KEY,
      },
    });

    // Same error handling as images route
    if (!workerResponse.ok) {
      throw new Error(
        `Worker responded with status ${workerResponse.status}: ${workerResponse.statusText}`
      );
    }

    // Only difference: Return raw response instead of JSON
    return new NextResponse(workerResponse.body, {
      status: 200,
      headers: {
        'Content-Type':
          workerResponse.headers.get('Content-Type') || 'image/jpeg',
      },
    });
  } catch (error) {
    // Same error logging as images route
    console.error('Error fetching image from worker:', error);
    return NextResponse.json(
      { error: 'Failed to fetch image from the worker.' },
      { status: 500 }
    );
  }
}
