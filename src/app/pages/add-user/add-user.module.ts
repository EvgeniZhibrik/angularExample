import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AddUserComponent} from "./add-user.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PrettyInputDirectiveModule} from "../../shared/directives/pretty-input.directive";


@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrettyInputDirectiveModule
  ],
  providers: [],
  exports: [AddUserComponent]
})
export class AddUserModule {}
