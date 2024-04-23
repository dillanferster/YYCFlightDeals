export const fetchData = async () => {
  const response = await fetch("/api/flights");
  const result = await response.json();

  return result;
};

export const fetchCityData = async () => {
  const response = await fetch("/api/city");
  const result = await response.json();

  return result;

}