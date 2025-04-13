import {Page} from "@playwright/test";
import { context } from "../hooks/hooks";

export class NavigeerTab {
    private readonly newTab = context.pages();
    // readonly page3  = this.newTab[3];
  


    /**
     * Navigates to a specific tab in the browser.
     *
     * @param {number} pageIndex - The index of the tab to navigate to.
     * @return {Promise<Page>} A promise that resolves to the navigated tab.
     */
    async NavigeerNaarTab(pageIndex: number){
        const navigateTab  = this.newTab[pageIndex];
        return navigateTab;
     }

  }