import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExerciseApp';
  validUser: boolean = false;
  
  loginForm!: FormGroup; 
  
  /*new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  })*/

  /*profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });*/

  constructor(private fb: FormBuilder) {
    /*this.loginForm = this.fb.group({
      userName: [''],
      password: ['']
    })*/
  }

  ngOnInit() {
    //this.createForm()
  }

  createForm() {
    //this.loginForm = this.fb.group({
      //userName: [''],
      //password: ['']
    //})
  }

  login() {
    //if (this.loginForm.value.userName == "Eric" && this.loginForm.value.password == "root")
    //  this.validUser = true; // reroute to next page
    //else
    //  this.validUser = false; // set to false and display proper msg
  }

}
