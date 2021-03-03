import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Main} from "../../../entities/main/main.namespace";
import {UnitOfMeasurement} from "../../../shared/helpers/formatters.helper";

@Component({
  selector: 'main-table-component',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnChanges {
  @Input() columns: Main.TableColumn[];
  @Input() rows: Main.TableRow[];
  @Input() loading: boolean;
  @Input() withTotal: boolean = false;

  columnTypes = Main.ColumnType;
  unitsOfMeasurement = UnitOfMeasurement;
  totalRow: Main.TableRow;

  ngOnChanges(changes: SimpleChanges) {
    if ((changes.withTotal || changes.rows) && this.withTotal && this.rows) {
      this.recalculateTotals();
    }
  }

  private recalculateTotals(): void {
    this.totalRow = this.columns.reduce((row, col) => {
      if (col.type !== Main.ColumnType.Currency) {
        row[col.field] = null;
        return row;
      }

      row[col.field] = this.rows.reduce((sum, row) => sum+row[col.field], 0);
      return row;
    }, {} as Main.TableRow);
  }
}
