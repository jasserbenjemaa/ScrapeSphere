import puppeteer from "puppeteer";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://overreacted.io/");

  const data = await page.evaluate(() => {
    const articles = document.querySelectorAll("a.block");

    return Array.from(articles)
      .slice(0, 4)
      .map((article) => {
        const title = article.querySelector("h2").innerText;
        const href = article.getAttribute("href");
        const text = article.querySelector("p.mt-1").innerText;
        const image = "https://avatars.githubusercontent.com/u/810438?v=4";
        const author = "dan abramov";

        return { title, href, text, image, author };
      });
  });

  console.log(data); // Output the scraped data
  await browser.close();
})();
