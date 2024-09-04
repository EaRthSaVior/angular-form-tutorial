import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  submitted = false;
  defaultSecret = 'pet';
  answer = '';
  genders = ['Male', 'Female', 'Other'];
  user = { username: '', email: '', secret: '', answer: '', gender: '' };
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({});//set for whole form
    this.signupForm.form.patchValue({ userData: { username: suggestedName } }); //update only username field inuserData object
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    this.user.username = this.signupForm.form.value.userData.username;
    this.user.email = this.signupForm.form.value.userData.email;
    this.user.secret = this.signupForm.form.value.secret;
    this.user.answer = this.signupForm.form.value.answer;
    this.user.gender = this.signupForm.form.value.gender;
    this.signupForm.reset();
  }
}
