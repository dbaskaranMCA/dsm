import { Component, OnInit } from '@angular/core';
 import { FormControl, FormGroup,Validators } from "@angular/forms";
 import { Router,ActivatedRoute  } from '@angular/router';
 import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
   loginForm: FormGroup;
   durationInSeconds = 5;


constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _snackBar: MatSnackBar
) {}

ngOnInit(){
  this.loginForm =  new FormGroup({
    'Email': new FormControl(null, [Validators.required]),
    'Password': new FormControl(null, [Validators.required])
   })
}

onSubmit(){
  let email = this.loginForm.get('Email').value;
  let password = this.loginForm.get('Password').value;

  if (email === 'Baskaran' && password === 'test'){
    this.router.navigate(['components/global']);
    //alert("success");
  }   else{
        this._snackBar.open('Username or Password is incorrect', 'close', {
          duration: 3000
        });
  }
}

}
