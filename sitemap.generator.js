/* Module */
import sitemap_routes from "./sitemap.routes";
import sitemap from "react-router-sitemap";

function generateSitemap() {
  return new sitemap(sitemap_routes)
    .build("https://eprezto.com")
    .save("./sitemap.xml");
}

generateSitemap();
