import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Main} from "../../entities/main/main.namespace";
import {MainApiService} from "./main.api.service";

@Injectable()
export class UsersService {
  private users$: BehaviorSubject<Main.TableRow[]> = new BehaviorSubject(null);

  constructor(private apiService: MainApiService) {}

  updateUsers(): void {
    this.apiService.getTableRows().subscribe((result) => {
      this.users$.next(result);
    });
  }

  addUser(user: Main.TableRow): Observable<string> {
    return this.apiService.addTableRow(user);
  }

  usersObservable(): Observable<Main.TableRow[]> {
    return this.users$.asObservable();
  }
}
