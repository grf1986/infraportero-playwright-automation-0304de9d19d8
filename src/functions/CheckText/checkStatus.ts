import { Locator, Page } from "@playwright/test";


export class CheckStatus {

    

    async Status(locator: Locator) {
        // await locator.waitForTimeout(waitTime.time);
        const status = await locator.textContent();
        return status; 
    }



}


