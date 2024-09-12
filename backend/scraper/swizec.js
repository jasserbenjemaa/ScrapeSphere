import puppeteer from "puppeteer";

const url = "https://swizec.com/blog/";

const swizec = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const allArticles = await page.evaluate(() => {
      const articles = document.querySelectorAll("div.css-zo9vbf");
      return Array.from(articles)
        .slice(0, 4)
        .map((article) => {
          const title = article.querySelector("h2").innerText;
          const url = article.querySelector("a").href;
          const text = article.querySelector("p").innerText;
          return {
            title,
            url,
            author: "Swizec",
            image:
              "https://swizec.com/favicon-32x32.png?v=32813dbeb138b475a5f408f511991f65",
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

export default swizec;
