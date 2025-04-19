import {Page } from "@playwright/test";



export class GaNaarAPP {

  
  constructor(private page: Page) {
    this.page = page;
    
  }

 async exportPage(page: Page) {
  return page;
 }
}




