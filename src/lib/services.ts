export async function getServicesByUserId(userId: number) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/services?userId=${userId}`,
    );

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch (error) {
    return [];
  }
}

export async function addService(service: any) {
  try {
    const response = await fetch(`${process.env.API_URL}/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    });

    if (!response.ok) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}
