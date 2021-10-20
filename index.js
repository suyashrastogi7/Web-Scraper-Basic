const cheerio = require('cheerio')
const fs = require('fs');
const request = require('request-promise')

async function main(){
    const html = await request.get('https://reactnativetutorial.net/css-selectors/')
    fs.writeFileSync('./test.html', html)
    const $ = await cheerio.load(html)
    const scrapedText = $('h1').text()
    console.log(scrapedText)
}

main()