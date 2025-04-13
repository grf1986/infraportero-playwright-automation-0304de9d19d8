import { Page } from "playwright/test";
import { context } from "../hooks/hooks";
import { DrukOpButtonMetNaam } from "./DrukOpButtonMetNaam";
import { NavigeerNaarTab} from "./navigeerNaarTab";

export class DrukOpTypeKnop {
  readonly page: Page;
  private readonly newTab = context.pages();
  readonly tab0  = this.newTab[0];
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];

  constructor(page: Page) {
    this.page = page;
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
}

// async drukOpTypeKnop(type: string, button: string, index: number, tab: number) {
//     const list = ["button", "label", "checkbox", "radio"];
  
//     if (!list.includes(type)) {
//       list.push(type);
//     } else {
//       console.log(type + " komt al voor. Deze wordt niet toegevoegd");           //Werkt niet
//     }
//        for (let i = 0; i < list.length; i++) {
//         const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
//         if (targetTab){
//         if (type !== "button") {
//           await new DrukOpButtonMetNaam(targetTab).drukOpType(type, button, index);
//           break;
//         }
//          else {
//           await new DrukOpButtonMetNaam(targetTab).hasText(button, index);
//           break;
//          }
//         }
//         else {return}
//       }
//     }
}