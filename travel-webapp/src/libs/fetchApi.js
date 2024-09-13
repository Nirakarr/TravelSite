export async function fetchFromApi(
    endpoint,
    { cache = "no-cache", ...options } = {}
  ) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${endpoint}`, {
      cache,
      ...options,
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const response = await res.json();
    return response.data;
  }
  