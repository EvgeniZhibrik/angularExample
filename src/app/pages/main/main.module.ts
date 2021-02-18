import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {MainApiService} from "./main.api.service";
import {MainTableComponent} from "./main-table/main-table.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [MainComponent, MainTableComponent],
  imports: [
    CommonModule,

  ],
  providers: [MainApiService],
  exports: [MainComponent]
})
export class MainModule {}
