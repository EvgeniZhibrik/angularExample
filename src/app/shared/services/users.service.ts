import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Main} from "../../entities/main/main.namespace";
import {MainApiService} from "./main.api.service";

@Injectable()
export class UsersService {
  users$: BehaviorSubject<Main.TableRow[]> = new BehaviorSubject([]);

  constructor(private apiService: MainApiService) {}


}
