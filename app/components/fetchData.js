export const fetchData = async () => {
  const response = await fetch("/api/flights");
  const result = await response.json();

  return result;
};
