export const fetchData = async () => {
  const response = await fetch("/api/flights");
  const result = await response.json();

  return result;
};

export const fetchCityData = async () => {
  const response = await fetch("/api/city");
  const result = await response.json();

  return result;
};

export const fetchPhotoData = async (cityPhoto) => {
  const response = await fetch(`/api/photos?city=${cityPhoto}`);
  console.log("Response status:", response.status);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();

  
  return result;
};
