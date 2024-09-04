import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultSecret = 'pet';
  answer = '';
  genders = ['Male', 'Female', 'Other'];
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({});//set for whole form
    this.signupForm.form.patchValue({ userData: { username: suggestedName } }); //update only username field inuserData object
  }
  onSubmit() {
    console.log(this.signupForm);
  }
}
