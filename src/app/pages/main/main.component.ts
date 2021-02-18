import {Component} from "@angular/core";
import {MainApiService} from "./main.api.service";
import {Main} from "../../entities/main/main.namespace";
import {Observable} from "rxjs";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  tableColumns: Main.TableColumn[] = [{
    id: '1',
    field: 'name',
    type: Main.ColumnType.Text,
    title: 'Name'
  }, {
    id: '2',
    field: 'salary',
    type: Main.ColumnType.Currency,
    title: 'Salary'
  }, {
    id: '3',
    field: 'lastUpdate',
    type: Main.ColumnType.Date,
    title: 'Last Update'
  }, {
    id: '4',
    field: 'specialNotes',
    type: Main.ColumnType.Input,
    title: 'Special Notes'
  }];
  tableRows$: Observable<Main.TableRow[]>;

  constructor(private apiService: MainApiService) {
    this.tableRows$ = this.apiService.getTableRows();
  }
}
