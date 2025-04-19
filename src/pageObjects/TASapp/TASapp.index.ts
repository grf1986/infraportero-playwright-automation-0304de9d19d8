import { Page } from "@playwright/test";


import { DrukOpPage } from "./drukOpPage";
import { DropDownPage } from "./DropDownPage";
import { FillInPage } from "./fillInPage";



import { CheckTextPage } from "./checkTextPage";
import { Voorbeeld3_druk_op } from "../../functions/DrukOpButton/voorbeeld3_druk_op";
import { WachtenOpPagina } from "./WachtOpPage";





export default class TASapp{

    private readonly page:Page;
    readonly drukOpPage: DrukOpPage;
    readonly dropDownPage:DropDownPage;
    readonly fillInPage:FillInPage
    readonly checkTextPage: CheckTextPage;
    readonly voorbeeld3_druk_op: Voorbeeld3_druk_op;
    readonly wachtOpPagina:WachtenOpPagina;




  
    constructor(page:Page){
        this.page= page;
        this.drukOpPage = new DrukOpPage(this.page);
        this.dropDownPage = new DropDownPage(this.page);
        this.fillInPage = new FillInPage(this.page);
        this.checkTextPage = new CheckTextPage(this.page);
        this.voorbeeld3_druk_op = new Voorbeeld3_druk_op(this.page);
        this.wachtOpPagina = new WachtenOpPagina(this.page);

    }
    
}

