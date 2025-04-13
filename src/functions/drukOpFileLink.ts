import {Locator, Page} from "@playwright/test";

export class DrukOpFileLink {

    async DrukFileLink(locator: Locator) {
        const visible = locator.getByRole('button').isVisible();
        if(await visible == true){
            await locator.waitFor({state: "visible"})
            await locator.click();
        }
        else{
            await locator.waitFor({state: "visible"});
            await locator.click();
        }
        
    }

  }