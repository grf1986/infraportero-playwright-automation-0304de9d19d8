import { Locator, Page } from "@playwright/test";
import { waitTime } from "../statics/Text/testData";

export class CheckStatus {

    

    async Status(locator: Locator) {
        // await locator.waitForTimeout(waitTime.time);
        const status = await locator.textContent();
        return status; 
    }



}


