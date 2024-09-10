import puppeteer from "puppeteer";

const url = "https://www.joshwcomeau.com/";

const josh = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    console.log("Page loaded successfully");
    const allArticles = await page.evaluate(() => {
      const articles = document.querySelectorAll("article");
      return Array.from(articles)
        .slice(0, 4)
        .map((article) => {
          const title = article.querySelector("span")
            ? article.querySelector("span").innerText
            : "no title";
          const url = article.querySelector("a")
            ? article.querySelector("a").href
            : "no url";
          const text = article.querySelector("p")
            ? article.querySelector("p").innerText
            : "no text";
          return {
            title,
            url,
            author: "Josh W Comeau",
            image: "https://www.joshwcomeau.com/assets/favicon.png?v=4",
            text,
          };
        });
    });

    await browser.close();
    return allArticles;
  } catch (error) {
    console.error("Error connecting to the browser:", error);
  }
};

export default josh;
