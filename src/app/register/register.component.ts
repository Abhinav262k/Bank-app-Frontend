import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  aim = 'Your perfect banking partner'
  // uname="";
  // acno="";
  // pswd=""; 
  
  //register model

  registerForm=this.fb.group({ //group
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],   //arrays
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  }) 

  constructor(private fb:FormBuilder, private ds:DataserviceService,private router:Router) { }  //dependnacy injection

  ngOnInit(): void {
  }

  register(){
    //alert("Register Successfully");

    console.log(this.registerForm);
    if(this.registerForm.valid){

    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;

    const result=this.ds.register(acno,uname,pswd);

    if(result){
      alert("successfully registered");
      this.router.navigateByUrl('')

    }
    else{
      alert("something wrong");
    }
  }
  else{
    console.log(this.registerForm.get('uname')?.errors);

  }
}


  
}
