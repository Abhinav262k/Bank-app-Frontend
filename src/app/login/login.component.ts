import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //3rd execution 

  aim = 'Your perfect banking partner'
  account ="Enter Your Ac No Here"
  Password = "Password must be 4 characters"

  acno = '';
  pswd = '';

  constructor(private router:Router,private ds:DataserviceService) { } //1st execution

  //dependancy injection

  ngOnInit(): void { // life cycle hooks - initial process
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

  login(){
    var acno = this.acno; 
    var pswd = this.pswd;

    const result=this.ds.login(acno,pswd);
    if(result){
      alert("Login Successful");
      this.router.navigateByUrl('dashboard');

    }

  }
}
  

  



//   login() {
//   //alert('Login Button clicked');
//     var acno = this.acno;
//     var pswd = this.pswd;

//     var userDetails=this.userDetails;

//     if (acno in userDetails) {
//       if(pswd==userDetails[acno]['password']) {
//         alert("login succesfull");
//         this.router.navigateByUrl('dashboard');
//       }
//       else{
//         alert("Incorrect password")
//       }
//     }
//     else {
//       alert("user does not exist");
//     }

//   }
// }




// login(a:any,p:any) {
//   //alert('Login Button clicked');
//   var acno = a.value;
//   var pswd = p.value;

//   var userDetails=this.userDetails;

//   if (acno in userDetails) {
//     if(pswd==userDetails[acno]['password']) {
//       alert("login succesfull");
//     }
//     else{
//       alert("Incorrect password")
//     }
//   }
//   else {
//     alert("user does not exist");
//   }

// }

// }
