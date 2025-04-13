import {Locator, Page} from "@playwright/test";
//import { Locator } from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { context } from "../hooks/hooks";
import { waitTime } from "../statics/Text/testData";

const log: Logger<ILogObj> = new Logger();


export class SelecteerWerkWachtRij {
    private readonly newTab = context.pages();
    readonly tab0 = this.newTab[0];
    readonly tab1 = this.newTab[1];
    readonly tab2 = this.newTab[2];
    readonly tab3 = this.newTab[3];
    readonly tab4 = this.newTab[4];
    readonly parentLocator: Locator;
    private textList: string[] = [];
    readonly werkWachtRij: Locator;
    readonly allesWeergeven: Locator;
    private werkWachtRijArray: string[] = [];
    readonly arrow: Locator;





    constructor(private page:Page) {
        this.tab1 = this.newTab[1];
        this.tab2 = this.newTab[2];
        this.tab3 = this.newTab[3];
        this.tab4 = this.newTab[4];
        this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
        this.textList= [];
        this.werkWachtRij = this.parentLocator.locator("[data-test-id='202007011542470116849-']")
        this.allesWeergeven = this.parentLocator.locator("[data-test-id='2015110410023706663712']")
        this.arrow = this.parentLocator.locator("[title='Werkwachtrijen']");


    }

   //  async werkWachtrij(){
   //        await this.arrow.click() 
   //        await this.page.waitForTimeout(300);

   //        this.page.waitForSelector("[class='wk chrome yui-skin-sam'] [data-test-id='2015110410023706663712']")
   //        const zichtBaar = await this.allesWeergeven.isVisible()
   //        if (zichtBaar){
   //           await this.allesWeergeven.click()
   //           await this.page.waitForTimeout(300);

   //        }
   //        else if (!zichtBaar){
   //           log.silly("De knop Alles weergeven is niet zichtbaar")
   //        }
   //        //De waarde i < 30 is gezet omdat er in de toekomst meerdere categorieen kunnen worden toegevoegd. Op dit moment zijn er veel minder dan
   //        //30 categorieen. Dit zorgt niet voor extra arrayopvulling omdat lege entries in de array met elementText.trim() weg worden geveegd 
   //           for (let i = 1; i < 35; i++) {
   //              const elementText = await this.parentLocator.locator(`[data-test-id='202007011542470116849-${i}']`).textContent() as string;
   //              this.werkWachtRijArray.push(elementText.trim())
   //           }
   //           this.werkWachtRijArray.forEach(item => this.textList.push(item.replace(/\n/g, "").replace(/\s*\d+\s*$/, '').trim()));
    
   //           return this.textList;
   //        }
   //      async klikkenOpWerkWachtRij(werkWachtRij: string){
   //        for (let i = 0; i < this.textList.length; i++) {
   //           if (werkWachtRij == this.textList[i]){
   //              i=i+1
   //              await this.parentLocator.locator(`[data-test-id='202007011542470116849-${i}']`).click()
   //              this.werkWachtRijArray = []
   //              this.textList = [];
   //              break;
   //           }
             
   //        }   
   //      }

         async SelecteerWerkWachtrij(text:string){
          await this.page.waitForTimeout(300);
          await this.arrow.click() 
          await this.page.waitForTimeout(300);
          await this.allesWeergeven.click()
          await this.parentLocator.locator ("[data-test-id='202007021347150484875']:has-text('" + `${text}` + "')").click(); 
          await this.page.waitForTimeout(300);
 
       
        }
      }