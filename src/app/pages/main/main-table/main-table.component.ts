import {Component, Input} from "@angular/core";
import {Main} from "../../../entities/main/main.namespace";
import {UnitOfMeasurement} from "../../../shared/helpers/formatters.helper";

@Component({
  selector: 'main-table-component',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent {
  @Input() columns: Main.TableColumn[];
  @Input() rows: Main.TableRow[];
  @Input() loading: boolean;

  columnTypes = Main.ColumnType;
  unitsOfMeasurement = UnitOfMeasurement;
}
