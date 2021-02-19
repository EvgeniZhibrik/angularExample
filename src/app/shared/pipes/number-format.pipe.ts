import {Pipe, PipeTransform, NgModule} from '@angular/core';
import {FormattersHelper, UnitOfMeasurement} from '../helpers/formatters.helper';

@Pipe({name: 'numberFormat'})
export class NumberFormatPipe implements PipeTransform {
  transform(
    value: number | string,
    accuracy?: number,
    isPostfixNeeded?: boolean,
    ignoreThousands?: boolean,
    accurateAnyway?: boolean,
    measure?: UnitOfMeasurement | string
  ): string {
    return FormattersHelper.formatValue(value, accuracy, isPostfixNeeded, ignoreThousands, accurateAnyway, measure);
  }
}

@NgModule({
  declarations: [
    NumberFormatPipe,
  ],
  exports: [
    NumberFormatPipe,
  ]
})
export class NumberFormatModule {
}
