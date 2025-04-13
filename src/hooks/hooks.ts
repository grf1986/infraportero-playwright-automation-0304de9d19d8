import { After, Before, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, PageScreenshotOptions, chromium } from "@playwright/test";

import { writeFile } from 'fs/promises';
import { GetTodayDate } from "../helpers/getDate";


let browser: Browser;
let page: Page;
let context: BrowserContext;
let pages: BrowserContext["pages"];




async function takeScreenshot(scenarioName: string) {
  const screenshotPath = `test-results/${scenarioName}.png`;
  await page.waitForLoadState();
  await page.screenshot({ path: screenshotPath });
  return screenshotPath;
}


Before(async () => {
  browser = await chromium.launch({ headless: true, });
  context = await browser.newContext({ ignoreHTTPSErrors: true, });
  page = await context.newPage();

  await page.setViewportSize({
    width: 1920,
    height: 1080,
  });
});

After(async function (scenario) {

  if (scenario.result?.status === Status.FAILED) {
    const scenarioName = scenario.pickle.name;
    const todayDateAndTime = GetTodayDate().todayDateAndTime;

    // Iterate over all open pages
    const pages = await  context.pages();
    for (const page of pages) {
      const screenshotPath = await takeScreenshot(scenarioName + todayDateAndTime);
      const screenshotData = await page.screenshot();
      await writeFile(screenshotPath, screenshotData);
    }
    
  }
  await page.close();
  await browser.close();
});

  /**
   * This function waits for the next page to be created and returns that page.
   * It is used to open a new tab and return the page object of that tab.
   * @returns {Promise<Page>} - The promise resolves with the page object of the newly created tab.
   */
async function NewTab() {

    const [newPage] = await Promise.all([
      await context.waitForEvent('page')
  
    ]);
   return newPage
   
}

export { browser, page, context, NewTab, pages };

