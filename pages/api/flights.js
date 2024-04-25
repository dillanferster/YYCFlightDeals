// pages/api/flights.js
export default async function handler(req, res) {
  // Define the URL of the external API you want to fetch data from

  try {
    // Fetch data from the external API
    const response = await fetch(
      "https://api.travelpayouts.com/v1/city-directions?origin=YYC&limit=14&currency=cad&market=ca",
      {
        method: "GET",
        headers: {
          "x-access-token": process.env.NEXT_PUBLIC_FLIGHT_API_KEY,
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
