const fs = require("fs").promises;
const fetch = require("node-fetch");

const url = "https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg"

downloadImgByURL(url);

async function downloadImgByURL(url) {
    const response = await fetch(url)
    const buffer = await response.buffer();
    try {
        await fs.writeFile(`./image.jpg`, buffer);
        console.log('finished downloading!')
    }
    catch (error){
        console.log(error)
    }
}
