import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { CommonModule } from "@angular/common";

const declarations = []

const imports: any = [
    CommonModule,
    SharedModule
]

@NgModule({
    imports:[
        ...imports
    ],
    declarations:[
    ],
    exports:[
        ...imports
    ],
    providers:[]
})

export class HeaderModule{}