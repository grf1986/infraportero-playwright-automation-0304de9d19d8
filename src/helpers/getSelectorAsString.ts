import {Locator} from "@playwright/test";

import { ILogObj, Logger } from "tslog";
//import { CheckText } from "../functions/checkText"; 

const log: Logger<ILogObj> = new Logger();
export class Locator2String {


    async getSelectorAsString(selectorElement: Locator): Promise<string>  {
        // Convert the locator to a string representation
        const selector = selectorElement.toString();
        
        // Use regex to find all occurrences of strings inside brackets []
        const matches = selector.match(/\[(.*?)\]/g);
        
        if (matches && matches.length > 0) {
            // Format each match with brackets and join them with spaces
            return matches.map(match => match).join(' ');
        } else {
            throw new Error('Unable to retrieve the selector from the Locator.');
        }
        }

  }