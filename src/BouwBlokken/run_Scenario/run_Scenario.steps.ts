
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";




setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('We testen scenario: {string}', async (scenario) => {
     log.silly("we runnen nu: ------------> " + scenario);
});


    



export { };



