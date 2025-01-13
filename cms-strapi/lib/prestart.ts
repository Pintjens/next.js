import { log } from "node:console";
import fs from "node:fs"
import { fetchGlobals } from "./api";



async function startUp(){

    log("Startup function running")

    const globals = await fetchGlobals();


      fs.writeFile(`lib/globalData.json`,
        JSON.stringify(globals), err => {
        if (err) {
          console.error(err);
        }
      });

      
}
startUp()
