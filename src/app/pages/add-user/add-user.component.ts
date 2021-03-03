import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'add-user-component',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, OnDestroy {

  userForm: FormGroup;
  notesArray: FormArray;
  subscription: Subscription;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      salary: [null, [Validators.required, Validators.max(5000)]],
      lastUpdate: [null, Validators.required],
      specialNotes: this.fb.array([['']])
    });

    this.notesArray = this.userForm.get('specialNotes') as FormArray;

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  deleteNote(i: number): void {
    this.notesArray.removeAt(i);
  }

  addNote(): void {
    this.notesArray.push(this.fb.control(''));
  }

  apply(): void {
    this.subscription = this.usersService.addUser(this.userForm.value).subscribe((result) => {
      if (result === 'success') {
        this.router.navigate(['main']);
      }
    });
  }
}
