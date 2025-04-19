import { After, Before, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, firefox, webkit } from "@playwright/test";
import { writeFile } from 'fs/promises';
import { GetTodayDate } from "../helpers/getDate";

let browser: Browser;
let context: BrowserContext;
let page: Page;

// Pick browser dynamically based on environment variable (default chromium)
async function launchBrowser() {
  const browserName = process.env.BROWSER || 'chromium';
  

  switch (browserName.toLowerCase()) {
    case 'firefox':
      return await firefox.launch({ headless: false });
    case 'webkit':
      return await webkit.launch({ headless: false });
    case 'chromium':
    default:
      return await chromium.launch({ headless: false });
  }
}

async function takeScreenshot(scenarioName: string) {
  const screenshotPath = `test-results/${scenarioName}.png`;
  await page.waitForLoadState();
  await page.screenshot({ path: screenshotPath });
  return screenshotPath;
}
function getUserAgent(browserName: string): string {
  switch (browserName) {
    case "firefox":
      return "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0";
    case "webkit":
      return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15";
    case "chromium":
    default:
      return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
  }
}

Before(async () => {
  browser = await launchBrowser();
  context = await browser.newContext({
    ignoreHTTPSErrors: true,
    viewport: { width: 1920, height: 1080 },
    userAgent: getUserAgent(process.env.BROWSER || 'chromium'),
    locale: 'en-US',
    timezoneId: 'Europe/Amsterdam',
    javaScriptEnabled: true,
  });

  page = await context.newPage();

  // Cloudflare Stealth Trick
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
  });
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const scenarioName = scenario.pickle.name.replace(/\s+/g, '_');
    const todayDateAndTime = GetTodayDate().todayDateAndTime;

    const pages = await context.pages();
    for (const p of pages) {
      const screenshotPath = `test-results/${scenarioName}_${todayDateAndTime}.png`;
      const screenshotData = await p.screenshot();
      await writeFile(screenshotPath, screenshotData);
    }
  }

  await context.close();
  await browser.close();
});

/**
 * Open and return a new tab (page)
 */
async function NewTab(): Promise<Page> {
  const [newPage] = await Promise.all([
    context.waitForEvent('page')
  ]);
  return newPage;
}

export { browser, context, page, NewTab };
