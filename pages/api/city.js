// pages/api/flights.js
export default async function handler(req, res) {
  try {
    // Fetch data from the external API
    const response = await fetch(
      "https://api.travelpayouts.com/data/en/cities.json",
      {
        method: "GET",
        headers: {
          "x-access-token": "f3e7c8d52cbadd71315114a9744c4d01",
        },
      }
    );
    const data = await response.json();

    // Set the CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");

    // Send the data back to the client
    res.status(200).json(data);
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
}
