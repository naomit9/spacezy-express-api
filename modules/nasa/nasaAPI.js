const nasaURL = "https://api.nasa.gov/planetary/apod?api_key="
const nasaAPIKey = process.env.NASA_API_KEY

// Functions for fetching APOD from NASA API
async function getPic() {
    let reqUrl = `${nasaURL}${nasaAPIKey}`
    const response = await fetch(
        reqUrl, 
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return await response.json()
}


module.exports = {
    getPic
}