const newsURL = 'https://api.spaceflightnewsapi.net/v4/articles?title_contains=NASA'

async function getNews() {
    const response = await fetch(newsURL)
    console.log(response)
    const data = await response.json()
    return data.results.map(article => ({
        title: article.title,
        url: article.url,
        image_url: article.image_url,
        news_site: article.news_site,
        published_at: article.published_at,
        summary: article.summary
    }))
}
module.exports = {
    getNews
}