/*
const datepicker = document.getElementById('datepicker');
const apodPicture = document.getElementById('apod-picture');
const apodExplanation = document.getElementById('apod-explanation');

// Function to pick a date
datepicker.addEventListener("change", async function(){
    const selectedDate = datepicker.value
    const apodDATA = await fetchAPOD(selectedDate)
    renderAPOD(apodDATA)
})

// Function to fetch APOD data based on the selected date
async function fetchAPOD(date) {
    const nasaURL = "https://api.nasa.gov/planetary/apod?api_key="
    const nasaAPIKey = process.env.NASA_API_KEY
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

// Function to render the APOD data to the browser
function renderAPOD() {
    apodPicture.src = apodDATA.url
    apodExplanation.textContent = apodDATA.explanation
}
*/



