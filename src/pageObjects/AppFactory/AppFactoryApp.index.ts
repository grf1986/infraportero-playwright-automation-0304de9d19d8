import { BrowserContext, Locator,Page } from "@playwright/test";
import { SelectAppPage } from "./SelectAppPage";
import { LoginPageAppFactory } from "./LoginPage";


export default class AppFactoryAppIndex{
    private readonly page:Page;
    readonly selectAppPage:SelectAppPage;
    readonly loginPageAppFactoryPage:LoginPageAppFactory;
   
    constructor(page:Page){
        this.page= page;
        this.loginPageAppFactoryPage = new LoginPageAppFactory(this.page)
        this.selectAppPage = new SelectAppPage(this.page);   
    }
}

