import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Main} from "../../entities/main/main.namespace";
import {delay, tap} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class MainApiService {
  getTableRows(): Observable<Main.TableRow[]> {
    const data = localStorage.getItem('usersData') ? JSON.parse(localStorage.getItem('usersData')) : [{
      name: 'Alex',
      salary: 1000,
      lastUpdate: new Date(),
      specialNotes: ['bla']
    }, {
      name: 'Betty',
      salary: 1100,
      lastUpdate: new Date(),
      specialNotes: ['bla','bla']
    }, {
      name: 'Cris',
      salary: 1200,
      lastUpdate: new Date(),
      specialNotes: ['bla','blabla']
    }];
    localStorage.setItem('usersData', JSON.stringify(data));
    return  of(data).pipe(delay(4000));
  }

  addTableRow(item: Main.TableRow): Observable<string> {
    return of('success').pipe(delay(3000), tap(() => {
      const data = JSON.parse(localStorage.getItem('usersData'));
      localStorage.setItem('usersData', JSON.stringify(data.concat([item])));
    }));
  }
}
