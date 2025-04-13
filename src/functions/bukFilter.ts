import { Locator, Page } from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { CheckText } from "./checkText";
import { Return } from "./returnNumberOfListItems";
import { DrukOpButtonMetNaam } from "./DrukOpButtonMetNaam";
const log: Logger<ILogObj> = new Logger();
export class BukFilter {
    
    readonly parentLocator: Locator
    readonly inactieTaken: Locator
    readonly actieveTaken: Locator
    readonly menuResultInactieveTaken: Locator
    readonly menuResultActieveTaken: Locator
    readonly filterToepassen: Locator
    readonly tekstZoeken: Locator
    readonly pasToe: Locator
    private textArray: string[] = [];
    private textArray2: string[] = [];
    private werkWachtRijArray: string[] = [];
    private textList: string[] = [];
    readonly arrow: Locator
    readonly werkWachtRij: Locator
    readonly allesWeergeven: Locator


    
 constructor(private page: Page)  {

    
    this.page = page
    // parentLocator is de allerbovenste locator van type class. Die moet je altijd nemen als parentLocator.
    this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]')
    this.inactieTaken = this.parentLocator.locator("[class='content-item content-layout item-3 remove-all-spacing flex flex-row'] [data-test-id='202007011657090783567-layout']")
    this.actieveTaken = this.parentLocator.locator("[class='content-item content-layout item-2 remove-all-spacing flex flex-row'] [data-test-id='202007011657090783567-layout']")
    // De 2 locators hieronder beginnend met menuResult zitten als je op '3 bolletjes' klikt naast ID + element inspecteren + dan het gehele vlak. Daar zit id=pyNavigation....
    this.menuResultInactieveTaken = this.parentLocator.locator("[id='pyNavigation1726492355768']")
    this.menuResultActieveTaken = this.parentLocator.locator("[id='pyNavigation1726574220724']")
    // De 3 locators hieronder zitten in het menutje behorend bij het klikken op de 3 bolletjes. Filter Toepassen is de 3de menu-optie. 
    // Tekst zoeken is de button die verschijnt als je op Filter toepassen menu-optie klikt. Pas toe is een button die ook verschijnt. 
    // De onderste 3 locators hier beneden zijn gelijk voor zowel Actieve als inactieve taken schermdelen.
    this.filterToepassen = this.parentLocator.locator("[data-test-id='201805092139040821483']");
    this.tekstZoeken = this.parentLocator.locator("[data-test-id='20160524050907021913810']");
    this.pasToe = this.parentLocator.locator("[data-test-id='201604060130370006117741']");
    this.textArray = [];
    this.textArray2 = [];
    this.textList = [];
    this.arrow = this.parentLocator.locator("[class='dl-accordion-btn']");
    this.werkWachtRij = this.parentLocator.locator("[data-test-id='202007011542470116849-']")
    this.allesWeergeven = this.parentLocator.locator("[data-test-id='2015110410023706663712']")

    
 }
 async opbouwenArray(schermsoort: string){
  
if(schermsoort == "actieveTaken"){
   // i < 7 omdat er op dit moment 6 kolommen zijn. Ga je i ophogen naar 8 of meer zonder dat er kolommen bijkomen 
   // dan wordt de inactieTaken.locator niet meer gevonden. Dan volgt een runtime exception
   for (let i = 0; i < 7; i++) {
    const elementText = await this.actieveTaken.locator(`[data-test-id='202007011657090783567-th-${i}']`).textContent() as string;
    this.textArray.push(elementText.trim())
 }
 return this.textArray
 }
else if  (schermsoort == "inactieveTaken"){
   // i < 7 omdat er op dit moment 6 kolommen zijn. Ga je i ophogen naar 8 of meer zonder dat er kolommen bijkomen 
   // dan wordt de inactieTaken.locator niet meer gevonden. Dan volgt een runtime exception
      for (let i = 0; i < 7; i++) {
       const elementText = await this.inactieTaken.locator(`[data-test-id='202007011657090783567-th-${i}']`).textContent() as string;
       this.textArray.push(elementText.trim())
    }
    return this.textArray
    }
    else {
      log.silly("De schermsoort " + schermsoort + " bestaat niet. Kies actieveTaken of inactieveTaken" )
    }
 }

   async opbouwenArrayTestData(schermsoort: string, rij: number, value: string){
      const values = new Return(this.page);
      if (schermsoort == "actieveTaken") {
      const returnActieveTaken = await values.ReturnfListItems(this.actieveTaken.locator(`[data-test-id='202007011657090783567-R${rij}'] `))    
       return returnActieveTaken.filter(item => item.trim() == value);
      }
      else if (schermsoort == "inactieveTaken") {
       const returnInactieveTaken = await values.ReturnfListItems(this.inactieTaken.locator(`[data-test-id='202007011657090783567-R${rij}'] `))
        return returnInactieveTaken.filter(item => item.trim() == value);
      }
   }

   async werkWachtrij(){
      await this.arrow.click() 
      this.page.waitForSelector("[class='wk chrome yui-skin-sam'] [data-test-id='2015110410023706663712']")
      const zichtBaar = await this.allesWeergeven.isVisible()
      if (zichtBaar){
         await this.allesWeergeven.click()
      }
      else if (!zichtBaar){
         log.silly("De knop Alles weergeven is niet zichtbaar")
      }
      //De waarde i < 30 is gezet omdat er in de toekomst meerdere categorieen kunnen worden toegevoegd. Op dit moment zijn er veel minder dan
      //30 categorieen. Dit zorgt niet voor extra arrayopvulling omdat lege entries in de array met elementText.trim() weg worden geveegd 
         for (let i = 1; i < 30; i++) {
            const elementText = await this.parentLocator.locator(`[data-test-id='202007011542470116849-${i}']`).textContent() as string;
            this.werkWachtRijArray.push(elementText.trim())
         }
         this.werkWachtRijArray.forEach(item => this.textList.push(item.replace(/\n/g, "").replace(/\s*\d+\s*$/, '').trim()));

         return this.textList;
      }
    async klikkenOpWerkWachtRij(werkWachtRij: string){
      for (let i = 0; i < this.textList.length; i++) {
         if (werkWachtRij == this.textList[i]){
            i=i+1
            await this.parentLocator.locator(`[data-test-id='202007011542470116849-${i}']`).click()
            this.werkWachtRijArray = []
            this.textList = [];
            break;
         }
         
      }   
    }  
      // async opbouwenArrayTestData2(schermsoort: string, rij: number, kolom: string, value: string){   
      // this.textArray2 = await this.opbouwenArray(schermsoort) as string[]
      // const text = new CheckText(this.page)
      // if(schermsoort == "actieveTaken"){
      //    for (let i = 0; i < this.textArray2.length; i++) {
      //       if (kolom == this.textArray2[i]){
      //          for (let i = 1; i < this.textArray2.length; i++) {
      //             const elementRijText = await text.CheckText(this.actieveTaken.locator(`[data-test-id='202007011657090783567-R${rij}'] [aria-colindex='${i}']`)) as string; 
      //             if (value == elementRijText){
      //                 log.silly('De waarde ' + value + ' behorend bij ' + kolom + ' ' + rij + ' is gelijk aan ' + elementRijText)
      //                break;
      //             }
      //             else {
      //                log.silly('De waarde ' + value + ' behorend bij ' + kolom + ' ' + rij + ' komt niet overeen met ' + elementRijText)
      //             }
      //          }
      //        }
      //       else if (kolom !== this.textArray2[i]){
      //          log.silly('De kolom ' + kolom + ' komt niet voor in ' + schermsoort )
      //       } 
      //    }
      // }
      //    if(schermsoort == "inactieveTaken"){
      //       for (let i = 0; i < this.textArray2.length; i++) {
      //          if (kolom == this.textArray2[i]){
      //             for (let i = 1; i < this.textArray2.length; i++) {
      //                const elementRijText = await this.actieveTaken.locator(`[data-test-id='202007011657090783567-R${rij}'] [aria-colindex='${i}'] `).textContent() as string;
      //                if (value == elementRijText){
      //                   log.silly('De waarde ' + value + ' behorend bij ' + kolom + ' ' + rij + ' is gelijk aan ' + elementRijText)
      //                   break;
      //                }
      //                else {
      //                   log.silly('De waarde ' + value + ' behorend bij ' + kolom + ' ' + rij + ' komt niet overeen met ' + elementRijText)
      //                }
      //             }
      //           }
      //          else if (kolom !== this.textArray2[i]){
      //             log.silly('De kolom ' + kolom + ' komt niet voor in ' + schermsoort )
      //          } 
      //       }
      //    }
      //    }
   
 async Filter(taakSoort: string, zaakNummer: string, kolomNaam: string) {
   const getCaseList = new DrukOpButtonMetNaam(this.page);
 if (taakSoort == "inactieveTaken") {
   for (let j = 0; j < this.textArray.length; j++) {
      const menuItemLocator = this.inactieTaken.locator(`[aria-label='${this.textArray[j]} Actions']`)
      if (kolomNaam == this.textArray[j]) {
        await this.page.waitForTimeout(20000)
            await menuItemLocator.click();
            await this.filterToepassen.click();
            await this.tekstZoeken.fill(zaakNummer);
            await this.pasToe.click();
            this.textArray = [];
            break;
       //  }
      }
   }
}
else if(taakSoort == "actieveTaken"){
   for (let j = 0; j < this.textArray.length; j++) {
      const menuItemLocator = this.actieveTaken.locator(`[aria-label='${this.textArray[j]} Actions']`)
      if (kolomNaam == this.textArray[j]) {
        await this.page.waitForTimeout(20000)
            await menuItemLocator.click();
            await this.filterToepassen.click();
            await this.tekstZoeken.fill(zaakNummer);
            await this.pasToe.click();
            this.textArray = [];
            break;
         }
      }
   }
}
 
async controleerText(taakSoort: string, zaakNummer: string, value: string) {
   if (taakSoort == "inactieveTaken") {
        const menuItemLocator = await this.inactieTaken.locator('[data-test-id="202007011657090785201"]').textContent();
        if (menuItemLocator == value) {
         log.silly('De waarde ' + value + ' behorend bij ' + zaakNummer + ' klopt' )
        }
     }
     else if (taakSoort !== value) {
      log.silly('De waarde ' + value + ' behorend bij ' + zaakNummer + ' klopt' )
     }
  
  else if(taakSoort == "actieveTaken"){
      const menuItemLocator = await this.actieveTaken.locator('[data-test-id="202007011657090785201"]').textContent();
      if (menuItemLocator == value) {
       log.silly('De waarde ' + value + ' behorend bij ' + zaakNummer + ' klopt' )
       
      }
   }
   else if (taakSoort !== value) {
    log.silly('De waarde ' + value + ' behorend bij ' + zaakNummer + ' klopt' )
   }
  }
}
