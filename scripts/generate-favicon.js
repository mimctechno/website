const sharp = require("sharp");
const fs = require("fs");

async function generateFavicon() {
  try {
    const inputPath = "./public/logo.webp";
    const outputPath = "./src/app/favicon.ico";

    await sharp(inputPath)
      .resize(144, 144, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 }, // Transparent background
      })
      .toFormat("png") // ICO technically supports PNG inside it, Next.js can serve it
      .toFile(outputPath);

    console.log("Successfully generated 144x144 favicon.ico");
  } catch (error) {
    console.error("Error generating favicon:", error);
  }
}

generateFavicon();
