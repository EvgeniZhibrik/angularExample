import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {MainTableComponent} from "./main-table/main-table.component";
import {CommonModule} from "@angular/common";
import {NumberFormatModule} from "../../shared/pipes/number-format.pipe";
import {PrettyInputDirectiveModule} from "../../shared/directives/pretty-input.directive";

@NgModule({
  declarations: [MainComponent, MainTableComponent],
  imports: [
    CommonModule,
    NumberFormatModule,
    PrettyInputDirectiveModule
  ],
  providers: [],
  exports: [MainComponent]
})
export class MainModule {}
