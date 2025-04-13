import {Locator, Page} from "@playwright/test";
//import { Locator } from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { context } from "../hooks/hooks";
import { TIMEOUT } from "dns";
import { waitTime } from "../statics/Text/testData";
import { FillInFunction } from "./fillInFunction";
import { DrukOpButtonMetNaam } from "./DrukOpButtonMetNaam";

const log: Logger<ILogObj> = new Logger();


export class ZaakOpzoekenFunctie {
    private readonly newTab = context.pages();
    readonly tab0 = this.newTab[0];
    readonly tab1 = this.newTab[1];
    readonly tab2 = this.newTab[2];
    readonly tab3 = this.newTab[3];
    readonly tab4 = this.newTab[4];
    readonly parentLocator: Locator;
    readonly slider: Locator;
    readonly hover:number
    readonly zoeken: Locator;
    readonly inActieveZakenBlok: Locator;
    readonly filterPopUp: Locator;
  readonly opgezochteZaak: Locator;



    constructor(private page:Page) {
        this.tab1 = this.newTab[1];
        this.tab2 = this.newTab[2];
        this.tab3 = this.newTab[3];
        this.tab4 = this.newTab[4];
        this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
        this.slider = this.parentLocator.locator('[data-test-id="201808081157350664772"] > div > div > ul');
        this.hover = waitTime.time
        this.zoeken = this.parentLocator.locator('[data-test-id="2016122110475608391271"][type="text"]')
        this.inActieveZakenBlok = this.page.locator('[class="wk chrome yui-skin-sam"] [class="template-root-marker gridDefault "]').nth(1);
        this.filterPopUp = this.parentLocator.locator('[aria-label="Column Filter Pop Over"]')
        this.opgezochteZaak = this.inActieveZakenBlok.locator("[data-test-id='20190208082033073432148']")
    }

    async Zoeken(value: string) {
        await this.slider.first().hover();
        await this.page.waitForTimeout(this.hover);
        await this.zoeken.click()
        await this.page.waitForTimeout(200);
        await this.zoeken.fill(value)
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(5000);
        await this.parentLocator.click();
      }

  //   async ZaakOpzoekenInwerkBak1(index: number, zaak:string){
  //     const fillin = new FillInFunction(this.page)
  //     const drukOp = new DrukOpButtonMetNaam(this.page)
  //     const zichtBaar = await this.filterPopUp.isVisible()
  //     if (zichtBaar){

  //       await fillin.FillIn_Veld(index, zaak)
  //       await drukOp.DrukLabelMetText("button", "Pas toe", 0)
  //       await this.opgezochteZaak.locator(`:has-text("${zaak}")`).click();
        
  //     } else{
  //       log.silly("Field not found");
  //     }
    
  // } 

//   async ZaakOpzoekenInwerkBak(index: number, zaakObject: string[]) {
//     const fillin = new FillInFunction(this.page);
//     const drukOp = new DrukOpButtonMetNaam(this.page);
//     const zichtBaar = await this.filterPopUp.isVisible();

//     let zaak: string = Object.values(zaakObject)[0];

//     if (zichtBaar) {
//         await fillin.FillIn_Veld(index, zaak);
//         await drukOp.DrukLabelMetText("button", "Pas toe", 0);
//         const linkText = await this.opgezochteZaak.textContent();
//         linkText.trim().startsWith(dossier)

//         await this.opgezochteZaak.startsWith(zaakobject).click();

//        //await this.opgezochteZaak.locator(`:has-text("${zaak}")`).click();
//         //await this.page.locator('' + `${zaak}` + '').nth(3).click();
//     } else {
//         log.silly("Field not found");
//     }
// }
async ZaakOpzoekenInwerkBak(werkbak:string,index:number, zaakObject: string, ){
if(werkbak == "actieve zaken"){
  const dataTestId = "[class='template-root-marker gridDefault '] [aria-describedby='table_1742812364043'] [data-test-id='20190208082033073432148']";
     const fillin = new FillInFunction(this.page);
     const drukOp = new DrukOpButtonMetNaam(this.page);
     const zichtBaar = await this.filterPopUp.isVisible();
     let zaak: string = Object.values(zaakObject)[0];

     await fillin.FillIn_Veld(index, zaak);
     await drukOp.DrukLabelMetText("button", "Pas toe", 0);
    // await this.page.reload();
    await this.page.waitForLoadState("load");
     await this.page.locator(dataTestId).click();
    }
else if(werkbak == "inactieve zaken"){
const dataTestId = "[class='content-item content-layout item-3 remove-all-spacing flex flex-row']  [class='layout-body clearfix  '] [data-test-id='20190208082033073432148']";
     const fillin = new FillInFunction(this.page);
     const drukOp = new DrukOpButtonMetNaam(this.page);
     const zichtBaar = await this.filterPopUp.isVisible();
     let zaak: string = Object.values(zaakObject)[0];

     await fillin.FillIn_Veld(index, zaak);
     await drukOp.DrukLabelMetText("button", "Pas toe", 0);
    // await this.page.reload();
    await this.page.waitForLoadState("load");
     await this.page.locator(dataTestId).click();}

    }
  
  }
  








  


      
     

  




  