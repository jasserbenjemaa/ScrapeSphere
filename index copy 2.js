import puppeteer from "puppeteer";

const url = "https://www.joshwcomeau.com/";

const main = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    console.log("Page loaded successfully");
    const allArticles = await page.evaluate(() => {
      const articles = document.querySelectorAll("article");
      return Array.from(articles)
        .slice(0, 3)
        .map((article) => {
          const title = article.querySelector("h3").innerText;
          const url = article.querySelector("a").href;
          return { title, url };
        });
    });
    console.log(allArticles);

    await browser.close();
    console.log(" browser closed");
  } catch (error) {
    console.error("Error connecting to the browser:", error);
  }
};

main();
