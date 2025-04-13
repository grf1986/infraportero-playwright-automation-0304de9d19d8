import {Page,Locator} from "@playwright/test";
import { context, NewTab } from "../hooks/hooks";
import { FillInFunction } from "./fillInFunction";
import { Locator2String } from "../helpers/getSelectorAsString";


export class LoginInFunction {
  private readonly newTab = context.pages();
  readonly tab1 = this.newTab[1];
  readonly tab2 = this.newTab[2];
  readonly tab3 = this.newTab[3];
  readonly tab4 = this.newTab[4];
  readonly username: Locator
  readonly password: Locator;
  readonly submitbutton: Locator

  constructor( private page: Page) {
    this.page = page;
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
    this.username = this.page.locator('[id="txtUserID"]');
    this.password = this.page.locator('[id="txtPassword"]');
    this.submitbutton = this.page.locator('[id="sub"]');

  }

  async PageSize(pageIndex: number) {
    const pageSize = await this.newTab[pageIndex].setViewportSize({
      width: 1920,
      height: 1080,
    });
    return pageSize;
  }

  async fillinUsername(username: string): Promise<void>{
    await this.username.fill(username);
    
    // const fillInUserName = new Locator2String().getSelectorAsString(this.username); 
    // const fillInPassword = new Locator2String().getSelectorAsString(this.password);
    // const invullen  = new  FillInFunction(this.page);
  
    // await invullen.FillIn_Veld(0,username);
  }
  async fillinPassword(password: string){
    await this.password.fill(password);
    // const invullen  = new  FillInFunction(this.page);
    //     await invullen.FillIn_Veld(0,password);
  }
  async PressSubMitButton(){
    await this.submitbutton.click()
  }
     }



    
     

  