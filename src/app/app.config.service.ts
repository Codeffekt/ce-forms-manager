import { Injectable } from "@angular/core";
import { CeCoreModuleConfig } from "@codeffekt/ce-core";

@Injectable({ providedIn: 'root'})
export class AppConfigService {    

    constructor() {}

    async load(): Promise<CeCoreModuleConfig> {
        const res = await fetch('config/config.json');        
        return res.json();
    }
}