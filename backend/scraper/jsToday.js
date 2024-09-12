import puppeteer from "puppeteer";

const url = "https://javascripttoday.com/";

const jsToday = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    console.log("Page loaded successfully");
    const allArticles = await page.evaluate(() => {
      const articles = document.querySelectorAll("div.card");

      return Array.from(articles)
        .slice(5, 9) // Limit to the first 3 articles
        .map((article) => {
          const titleElement = article.querySelector(".card-body h3 a");
          const textElement = article.querySelector(".card-text");
          const imgElement = article.querySelector("img");

          const title = titleElement
            ? titleElement.innerText.trim()
            : "No title";
          const url = titleElement ? titleElement.href : "#";
          const text = textElement
            ? textElement.innerText.trim()
            : "No description available";
          const author = "JavaScript Today"; // Static author
          const bgImage = imgElement
            ? "https://javascripttoday.com" + imgElement.getAttribute("src")
            : "";
          const image =
            "https://javascripttoday.com/images/js_hue0057b4d5aad256cee9ec82f09ecc831_49954_95x0_resize_q90_h2_box_3.webp";

          return {
            title,
            url,
            text,
            author,
            image,
            bgImage,
          };
        });
    });

    await browser.close();
    return allArticles;
  } catch (error) {
    console.error("Error connecting to the browser:", error);
  }
};

export default jsToday;
