import {Locator, Page} from "@playwright/test";
//import { Locator } from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { context } from "../hooks/hooks";
import { waitTime } from "../statics/Text/testData";

const log: Logger<ILogObj> = new Logger();


export class Beëindig_andere_sessie {
    private readonly newTab = context.pages();
    readonly tab0 = this.newTab[0];
    readonly tab1 = this.newTab[1];
    readonly tab2 = this.newTab[2];
    readonly tab3 = this.newTab[3];
    readonly tab4 = this.newTab[4];
    readonly parentLocator: Locator;
    // readonly gaKnop: Locator;
    readonly beëindig_andere_sessie: Locator;



    constructor(private page:Page) {
        this.tab1 = this.newTab[1];
        this.tab2 = this.newTab[2];
        this.tab3 = this.newTab[3];
        this.tab4 = this.newTab[4];
        this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
        this.beëindig_andere_sessie = this.parentLocator.locator('[data-test-id="201909040249200016365404"]');
        //this.gaKnop = this.parentLocator.locator('[type="button"]:has-text("Ga")');

    }

    async Beëindig_sessie() {
      await this.page.waitForLoadState("load");
        await this.page.waitForTimeout(5000);
        const linkBeschikbaar = await this.beëindig_andere_sessie.nth(1).isVisible();
        if (linkBeschikbaar == true) {
          await this.beëindig_andere_sessie.nth(1).click();
        }
      }


  }


      
     

  




  