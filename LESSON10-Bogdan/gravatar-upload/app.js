const fs = require("fs").promises;
const path = require("path");
const gravatar = require("gravatar");
const fetch = require("node-fetch");

const email1 = "info@goit.ua";
const gravatarURL = gravatar.url(email1, {protocol: "https", s: "100"})

downloadImgByURL(gravatarURL, "user-avatar.jpg");

async function downloadImgByURL(url, name) {
    const fileTypes = ["jpg", "png", "gif"];
    const fileExtension = name.split(".").pop()
    if(!fileTypes.includes(fileExtension)) {
        return false;
    }
    const fullPath = path.join(__dirname, "upload/avatars", name);
    const response = await fetch(url)
    const buffer = await response.buffer();
    try {
        await fs.writeFile(fullPath, buffer);
        console.log('finished downloading!')
    }
    catch (error){
        console.log(error)
    }
}