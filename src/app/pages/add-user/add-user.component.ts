import {Component, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'add-user-component',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  notesArray: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      salary: [null, [Validators.required, Validators.max(5000)]],
      lastUpdate: [null, Validators.required],
      specialNotes: this.fb.array([['']])
    });

    this.notesArray = this.userForm.get('specialNotes') as FormArray;

  }

  deleteNote(i: number): void {
    this.notesArray.removeAt(i);
  }

  addNote(): void {
    this.notesArray.push(this.fb.control(''));
  }

  apply(): void {
    console.log(this.userForm.value);
  }
}
