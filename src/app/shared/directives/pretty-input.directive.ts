import {Directive, ElementRef, NgModule} from "@angular/core";

@Directive({
  selector: '[prettyInput]'
})
export class PrettyInputDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}

@NgModule({
  declarations: [PrettyInputDirective],
  exports: [PrettyInputDirective]
})
export class PrettyInputDirectiveModule {}
