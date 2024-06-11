export async function getAnalitycsByUserId(userId: number) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/analytics-1?userId=${userId}`,
    );

    if (!response.ok) {
      return {};
    }

    return response.json();
  } catch (error) {
    return {};
  }
}
