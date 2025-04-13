
import { Locator, Page } from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { CheckText } from "./checkText";
import { Return } from "./returnNumberOfListItems";
import { DrukOpButton } from "./drukOpknop";
const log: Logger<ILogObj> = new Logger();
export class KebabMenuOpties {
    
    readonly parentLocator: Locator
    readonly kebabMenuVanBrief: Locator;
    readonly locatorResultKebab: Locator;
    readonly openMeerdere: Locator;
    readonly kopieren: Locator;
    readonly verplaatsen: Locator;
    readonly bijlageBeheren: Locator;
    readonly draaien: Locator;
    readonly outpuInformatie: Locator;
    readonly verwijderen: Locator;
    readonly samenvoegenSplitsen: Locator;



    
 constructor(private page: Page)  {
    this.page = page
    this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
    this.kebabMenuVanBrief = this.parentLocator.locator("[data-test-id='202401101750130738704']");
    this.locatorResultKebab = this.parentLocator.locator('[id="pyNavigation1725547010354"]');
    this.openMeerdere = this.locatorResultKebab.locator("[data-test-id='202406061226110481209']");
    this.kopieren = this.locatorResultKebab.locator("[data-test-id='202405311308340267246']");
    this.verplaatsen = this.locatorResultKebab.locator("[data-test-id='202405311308340303303']");
    this.draaien = this.locatorResultKebab.locator('[data-test-id="202403071721220528901"]');
    this.bijlageBeheren = this.locatorResultKebab.locator('[data-test-id="201808201738410082978"]');
    this.outpuInformatie = this.locatorResultKebab.locator('[data-test-id="202409041357070715185"]');
    this.verwijderen = this.locatorResultKebab.locator('[data-test-id="201802010634000039543"]');
    this.samenvoegenSplitsen = this.locatorResultKebab.locator('[data-test-id="2024021806174306484"]') 
 
 
 
 


 
 }

async KiesUitKebabMenuBrief(button: string){
    const druk = new DrukOpButton();
    await druk.Button(this.kebabMenuVanBrief.first());
    const visible = await this.kebabMenuVanBrief.first().isVisible();
    while(visible){
        // const druk = new DrukOpButton();
        // await druk.Button(this.kebabMenuVanBrief.first());
        await this.page.waitForSelector('[data-test-id="201802010634000039543"]');
        const values = new Return(this.page);
        const returnfListItems = await values.ReturnfListItems(this.locatorResultKebab)
        
        if(button == 'Open meerdere'){
            await this.page.waitForTimeout(2000);
            await druk.Button(this.openMeerdere);
            await this.page.waitForTimeout(2000);
            break;
        }
        else if(button == 'kopieren'){
            await druk.Button(this.kopieren);
            break;
        }
        else if(button == 'Verplaatsen'){
            await druk.Button(this.verplaatsen);
            break;
        }
        else if(button == 'Bijlage beheren'){
            await druk.Button(this.bijlageBeheren);
            break;
        }
        else if(button == 'Draaien'){
            await druk.Button(this.draaien);
            break;
        }
        else if(button == 'Output informatie'){
            await druk.Button(this.outpuInformatie);
            break;
        }
        else if(button == 'Verwijderen'){
            await druk.Button(this.verwijderen);
            break;

        }else if(button == 'Samenvoegen /splitsen'){
            await druk.Button(this.samenvoegenSplitsen);
            break;

        }}
  }
}