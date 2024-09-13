import { fetchFromApi } from "../fetchApi";

// Fetch all travel packages
export async function fetchTravelPackages(cache = "no-cache") {
  return await fetchFromApi("/travel-packages?populate=*", { cache });
}

// Fetch travel packages by slug
export async function fetchTravelPackagesBySlug(slug, cache = "no-cache") {
  return await fetchFromApi(`/travel-packages?populate=*&filters[slug][$eq]=${slug}`, { cache });
}

// Fetch travel packages by destination and other filters
export async function fetchTravelPackagesByFilters(destination = '', departureDate = '') {
  let query = [];
  if (destination) query.push(`filters[destination][$eq]=${encodeURIComponent(destination)}`);
  if (departureDate) query.push(`filters[departure_date][$eq]=${departureDate}`);
  
  const queryString = query.length > 0 ? `&${query.join('&')}` : '';
  
  const response = await fetchFromApi(`/travel-packages?populate=*${queryString}`);
  return response;
}