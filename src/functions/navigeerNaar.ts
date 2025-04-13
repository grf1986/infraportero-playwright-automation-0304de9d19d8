import { Locator, Page, BrowserContext } from "@playwright/test";
import { waitTime } from "../statics/Text/testData";

export class NavigeerNaar {

    readonly parentlocator: Locator;
    readonly aanmakenButton: Locator;
    readonly bukApplication: Locator;
    readonly hover: number;
    readonly wlzApplication: Locator;
    readonly klachtenApp: Locator
    readonly slider: Locator;
    readonly user: Locator;
    readonly startPagina: Locator;
    readonly sideMenu: Locator;

    constructor( private page: Page) {
        this.hover = waitTime.time
        this.page = page;
        this.parentlocator  = this.page.locator('[onresize="doHarnessResize()"]');
        this.slider         = this.parentlocator.locator('[id="sidebar-region-one"]');
        this.aanmakenButton = this.slider.locator('[data-test-id="201812201359010458611"] [aria-label="Aanmaken"]');
        this.bukApplication = this.slider.locator('[data-test-id="201812201359010337524"][title="BUK"]');
        this.wlzApplication = this.slider.locator('[data-test-id="201812201359010337524"]');
        this.klachtenApp    = this.slider.locator('[title="Klacht"]');
        this.user = this.page.locator('[data-test-id="px-opr-image-ctrl"]'); 
        this.sideMenu = this.page.locator('[data-test-id="201902130456540931644"]');
        this.startPagina = this.page.locator('[data-test-id="201902130456540931644"] [class="menu-item-title"]');
        //[title="Test Automation"]
    }

    async NavigeerNaar(env: string) {
        if (env == 'BUK'){
            await this.aanmakenButton.first().hover();
            await this.page.waitForTimeout(this.hover);
            await this.aanmakenButton.first().click();
            await this.bukApplication.nth(0).click();
        }
        else if(env == 'WLZ'){
            await this.aanmakenButton.first().hover();
            await this.page.waitForTimeout(this.hover);
            await this.aanmakenButton.first().click();
            await this.wlzApplication.nth(2).click();

        }
        else if(env == 'Klacht'){
            await this.aanmakenButton.first().hover();
            await this.page.waitForTimeout(this.hover);
            await this.aanmakenButton.first().click();
            await this.klachtenApp.nth(0).click();
        }
        else if(env == 'Test Automation'){
            //await this.aanmakenButton.first().hover();
            //await this.page.waitForTimeout(this.hover);
            await this.user.nth(0).click();
            
        }
        else if(env == 'startpagina'){
            await this.sideMenu.first().hover();
            await this.page.waitForTimeout(this.hover);
            await this.startPagina.first().click(); //locator(':has-text("Startpagina")')
          await this.page.locator('[class="workarea-view-scroll-wrapper"]').first().click()

    }

}
}