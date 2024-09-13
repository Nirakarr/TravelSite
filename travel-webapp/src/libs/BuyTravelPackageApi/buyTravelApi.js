const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${API_TOKEN}`,
};

export async function bookTicket(formData) {
    const response = await fetch(`${API_BASE_URL}/api/book-tickets`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        data: {
          userName: formData.userName, // Matching CMS field
          mobileNumber: formData.mobileNumber, // Matching CMS field
          address: formData.address,
          travel_package: formData.travel_packages, // Using the correct relation field from CMS
          numberOfTickets: formData.numberOfTickets, // Matching CMS field
        },
      }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to book tickets');
    }
  
    return await response.json();
  }
  
// Function to update the available slots of a travel package
export async function updateAvailableSlots(travelPackageId, newAvailableSlots) {
  const response = await fetch(`${API_BASE_URL}/api/travel-packages/${travelPackageId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      data: {
        available_slots: newAvailableSlots,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to update available slots');
  }

  return await response.json();
}