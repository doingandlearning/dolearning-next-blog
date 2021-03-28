const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");
const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();


sitemap({
  baseUrl: "https://kevincunningham.co.uk",
  pagesDirectory: __dirname + "/.next/server/pages",
  targetDirectory: "public/",
  ignoredExtensions: ["js", "map"],
  ignoredPaths: ["assets"], // Exclude everything that isn't static page
});

console.log(`✅ sitemap.xml generated!`);
