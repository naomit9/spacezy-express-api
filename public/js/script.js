/*
var dates='22-01-2023'
var convertDate=dates.split('-').reverse().join('-')
console.log(convertDate)
*/
// Take in the value of the date selected and convert it into the right format
const datepicker = document.getElementById('datepicker');
datepicker.addEventListener("change", ( event ) => {
    const selectedDate = datepicker.value
    var convertDate=selectedDate.split('-').reverse().join('-')
    console.log(convertDate)
    const apodDATA = fetchAPOD(convertDate)
    renderAPOD(apodDATA)
})
// Use the date to fetch the picture from that particular date
async function fetchAPOD(convertDate) {
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
// Render the picture to the browser

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



