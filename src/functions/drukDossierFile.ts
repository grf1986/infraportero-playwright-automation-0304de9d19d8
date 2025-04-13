import {Page,Locator} from "@playwright/test";
import { DrukActiesButton } from "./drukActiesButton";
import { context } from "../hooks/hooks";
import { DrukOpButton } from "./drukOpknop";
import { waitTime } from "../statics/Text/testData";
import { DrukOpButtonMetNaam } from "./DrukOpButtonMetNaam";
import { NavigeerNaarTab } from "./navigeerNaarTab";

export class DrukDossierFile {
    private readonly newTab = context.pages();
    readonly tab1  = this.newTab[1];
    readonly tab2  = this.newTab[2];
    readonly tab3  = this.newTab[3];
    readonly tab4  = this.newTab[4];
    readonly parentLocator: Locator;
    readonly bijbehoorendeZaken: Locator;
  
   
    constructor(private page: Page) {
    this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
    this.bijbehoorendeZaken = this.parentLocator.locator('[data-test-id="201812102006260055506_3"]');
    }
    async FileLink(tab: number, dossier: string,scenario: string) {
            
         const targetPage = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
                if (targetPage){
                    const drukButtonOpTab = new DrukDossierFile(targetPage);
                    // await this.page.waitForTimeout(90000);
                    await drukButtonOpTab.DrukButtonOpTab(tab,dossier,scenario);
                }
                else {return}
       
    }

    async DrukButtonOpTab( tab: number, dossier: string,scenario:string) {
        // while(!isVisible){
            if(tab == 0){
                const drukButtonOpTab = new DrukDossierFile(this.page);
                await drukButtonOpTab.DrukOpDossierLink(tab,dossier,scenario);
            }
            else if(tab == 1){
                const drukButtonOpTab = new DrukDossierFile(this.tab1);
                await drukButtonOpTab.DrukOpDossierLink(tab,dossier,scenario);
            }
            else if(tab == 2){
                const drukButtonOpTab = new DrukDossierFile(this.tab2);
                await drukButtonOpTab.DrukOpDossierLink(tab,dossier,scenario);
            }
            else if(tab == 3){
                const drukButtonOpTab = new DrukDossierFile(this.tab3);
                await drukButtonOpTab.DrukOpDossierLink(tab,dossier,scenario);
            }
            else if(tab == 4){
                const drukButtonOpTab = new DrukDossierFile(this.tab4);
                await drukButtonOpTab.DrukOpDossierLink(tab,dossier,scenario);
            }
            
    }

    async DrukOpDossierLink(tab: number, dossier: string,scenario: string) {
            //const visible = await this.dossierLink.isVisible();
                if(tab == 0){
                    const druk = new DrukOpButtonMetNaam(this.page);
                    await druk.DrukOpLinkMetNaam(dossier,scenario);
                }
                else if(tab == 1){
                    const druk = new DrukOpButtonMetNaam(this.tab1);
                    await druk.DrukOpLinkMetNaam(dossier,scenario);
                }
                else if(tab == 2){
                    const druk = new DrukOpButtonMetNaam(this.tab2);
                    await druk.DrukOpLinkMetNaam(dossier,scenario);
                }
                else if(tab == 3){
                    const druk = new DrukOpButtonMetNaam(this.tab3);
                    await druk.DrukOpLinkMetNaam(dossier,scenario);
                }
                else if(tab == 4){
                    const druk = new DrukOpButtonMetNaam(this.tab4);
                    await druk.DrukOpLinkMetNaam(dossier,scenario);
                }
                
    }


}