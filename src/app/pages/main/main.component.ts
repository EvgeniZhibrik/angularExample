import {Component, OnInit} from "@angular/core";
import {Main} from "../../entities/main/main.namespace";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {UsersService} from "../../shared/services/users.service";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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
    type: Main.ColumnType.Text,
    title: 'Special Notes'
  }];
  tableRows$: Observable<Main.TableRow[]>;
  tableLoading: boolean;
  showTotal = false;

  constructor(private usersService: UsersService, private router: Router) {
    this.tableLoading = true;
    this.tableRows$ = this.usersService.usersObservable().pipe(tap((rows) => {
      this.tableLoading = !rows;
    }));
  }

  ngOnInit(): void {
    this.usersService.updateUsers();
  }

  addUser(): void {
    this.router.navigate(['add']);
  }
}
