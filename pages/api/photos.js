export default async function handler(req, res) {
  try {
    let city = req.query.city;
    if (city) {
      city = city + " city";
    }

    // Fetch data from the external API
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${city}&per_page=1`,
      {
        method: "GET",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
        },
      }
    );

    const data = await response.json();
    const photos = data.photos;

    // Set the CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");

    // Send the data back to the client
    res.status(200).json(photos);
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching photos data." });
  }
}
