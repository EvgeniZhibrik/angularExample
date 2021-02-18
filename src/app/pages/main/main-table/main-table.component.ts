import {Component, Input} from "@angular/core";
import {Main} from "../../../entities/main/main.namespace";

@Component({
  selector: 'main-table-component',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent {
  @Input() columns: Main.TableColumn[];
  @Input() rows: Main.TableRow[];

  columnTypes = Main.ColumnType;
}
