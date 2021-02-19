import * as numeral from 'numeral';

export enum UnitOfMeasurement {
  CURRENCY = '$',
  PERCENTAGES = '%',
  EMPTY = ''
}

export class FormattersHelper {
  private static MILLION = 1.0e6;
  private static abbreviationsMarker = 'a';
  private static americanNumberFormat = '0,0';

  private static measuresBeforeValue: string[] = [UnitOfMeasurement.CURRENCY];

  static formatValue(
    value: number | string,
    accuracy: number = 2,
    isPostfixNeeded: boolean = false,
    ignoreThousands: boolean = true,
    accurateAnyway: boolean = false,
    measure: UnitOfMeasurement | string = UnitOfMeasurement.EMPTY
  ): string {
    if (!value && value !== 0) {
      value = 0;
    }
    const point = accurateAnyway ? '.' : '[.]';
    const fractionalPartTemplate = accuracy < 1 ? '' : `${point}${new Array(accuracy + 1).join('0')}`;
    const abbr = !isPostfixNeeded || (ignoreThousands && value < this.MILLION) ? '' : this.abbreviationsMarker;
    const formattedVal = numeral(value).format(`${this.americanNumberFormat}${fractionalPartTemplate}${abbr}`);
    if (this.measuresBeforeValue.includes(measure)) {
      return `${measure}${formattedVal}`;
    }
    return `${formattedVal}${measure}`;
  }
}
