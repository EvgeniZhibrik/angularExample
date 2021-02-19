import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Main} from "../../entities/main/main.namespace";
import {delay} from "rxjs/operators";

@Injectable()
export class MainApiService {
  getTableRows(): Observable<Main.TableRow[]> {
    return of([{
      name: 'Alex',
      salary: 1000,
      lastUpdate: new Date(),
      specialNotes: 'bla'
    }, {
      name: 'Betty',
      salary: 1100,
      lastUpdate: new Date(),
      specialNotes: 'blabla'
    }, {
      name: 'Cris',
      salary: 1100,
      lastUpdate: new Date(),
      specialNotes: 'blabla'
    },
      {
        name: 'Alex',
        salary: 1000,
        lastUpdate: new Date(),
        specialNotes: 'bla'
      }, {
        name: 'Betty',
        salary: 1100,
        lastUpdate: new Date(),
        specialNotes: 'blabla'
      }, {
        name: 'Cris',
        salary: 1100,
        lastUpdate: new Date(),
        specialNotes: 'blabla'
      },{
        name: 'Alex',
        salary: 1000,
        lastUpdate: new Date(),
        specialNotes: 'bla'
      }, {
        name: 'Betty',
        salary: 1100,
        lastUpdate: new Date(),
        specialNotes: 'blabla'
      }, {
        name: 'Cris',
        salary: 1100,
        lastUpdate: new Date(),
        specialNotes: 'blabla'
      },{
        name: 'Alex',
        salary: 1000,
        lastUpdate: new Date(),
        specialNotes: 'bla'
      }, {
        name: 'Betty',
        salary: 1100,
        lastUpdate: new Date(),
        specialNotes: 'blabla'
      }, {
        name: 'Cris',
        salary: 1100,
        lastUpdate: new Date(),
        specialNotes: 'blabla'
      },{
        name: 'Alex',
        salary: 1000,
        lastUpdate: new Date(),
        specialNotes: 'bla'
      }, {
        name: 'Betty',
        salary: 1100,
        lastUpdate: new Date(),
        specialNotes: 'blabla'
      }, {
        name: 'Cris',
        salary: 1100,
        lastUpdate: new Date(),
        specialNotes: 'blabla'
      }]).pipe(delay(4000));
  }
}
