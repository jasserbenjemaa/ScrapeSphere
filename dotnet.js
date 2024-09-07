import puppeteer from "puppeteer";

const url = "https://devblogs.microsoft.com/dotnet/";

const main = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    console.log("Page loaded successfully");
    const allArticles = await page.evaluate(() => {
      const articles = document.querySelectorAll("div.masonry-card");
      return Array.from(articles)
        .slice(0, 4)
        .map((article) => {
          const title = article.querySelector("h3 a").innerText;
          const url = article.querySelector("h3 a").href;
          const text = article.querySelector("p.mb-24").innerText;
          const author = article.querySelector("span.fs-14").innerText;
          const image = article
            .querySelector("img.avatar-20")
            .getAttribute("src");
          return {
            title,
            url,
            text,
            author,
            image,
          };
        });
    });
    console.log(allArticles);

    await browser.close();
    console.log(" browser closed");
  } catch (error) {
    console.error("Error connecting to the browser:", error);
  }
};

export default main();
