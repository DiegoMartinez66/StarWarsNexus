const loadData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Return the actual data back to the caller
    return data;
  } catch (error) {
    console.error("Could not fetch Star Wars data:", error);
    return null;
  }
}

export { loadData };