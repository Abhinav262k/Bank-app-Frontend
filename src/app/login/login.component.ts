import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //3rd execution 

  aim = 'Your perfect banking partner'
  account = "Enter Your Ac No Here"
  Password = "Password must be 4 characters"

  acno = '';
  pswd = '';

  constructor() { } //1st execution

  ngOnInit(): void { // life cycle hooks - initial process
  }

   userDetails:any = { //object of objects
    1000: { acno: 1000, username: 'Nihal', password: 100, balance: 2000 },
    1001: { acno: 1001, username: 'Jowsha', password: 101, balance: 3000 },
    1002: { acno: 1002, username: 'Albin', password: 102, balance: 4000 },

  }

  // userdefined function() / 4th execution

  acnoChange(event: any) {
    //console.log(event);
    console.log(event.target.value);
    this.acno = event.target.value;
  }

  pswdChange(event: any) {
    console.log(event.target.value);
    this.pswd = event.target.value;
  }



  login() {
    //alert('Login Button clicked');
    var acno = this.acno;
    var pswd = this.pswd;

    var userDetails=this.userDetails;

    if (acno in userDetails) {
      if(pswd==userDetails[acno]['password']) {
        alert("login succesfull");
      }
      else{
        alert("Incorrect password")
      }
    }
    else {
      alert("user does not exist");
    }

  }

}
