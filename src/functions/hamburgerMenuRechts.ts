import { Locator, Page } from "@playwright/test";



export class hamburgerMenuRechts {

    readonly page: Page;
    readonly parentlocator: Locator;
    readonly otherOptionsSubHeader: Locator;
    readonly expendButtonOptionsSubHeader: Locator;

    constructor(page: Page) {
        const selectorValue = { Active: 'Active', Future: 'Future' }
        this.page = page;
        this.parentlocator = page.locator('[data-portalharnessinsname="Data-Portal!UserPortal"]');
        this.otherOptionsSubHeader = this.parentlocator.locator('[class=" flex content layout-content-default  content-default  utils-wrapper sticker margin-t-1x"] ');
        this.expendButtonOptionsSubHeader = this.otherOptionsSubHeader.locator('[class="content-item content-field item-2 remove-bottom-spacing flex flex-row icon-toggler icon-expand icon-widescreen-expand min-height-0 width-auto margin-tb-1x padding-tb-0_5x dataValueRead"]');

    }

    async HamburgerKnop() {
        const visible = this.expendButtonOptionsSubHeader.getByRole('button').isVisible();
        if(await visible == true){
            await this.expendButtonOptionsSubHeader.click();
        }
        else{
        } 
    }


   

}