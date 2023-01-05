import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user=" ";



//depo ptoperties
  acno="";
  pswd="";
  amount="";

  //withdraw properties
  acno1="";
  pswd1="";
  amount1="";

  //date and time 

  SystemDate:any;

 

  constructor(private ds:DataserviceService,private router:Router) { 
   this.user=this.ds.currentUser
   this.SystemDate=new Date();
  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      alert('please login first');
      this.router.navigateByUrl('');
    }
  }

  deposit(){
    
    var acno=this.acno;
    var pswd=this.pswd;
    var amount=this.amount;

    const result=this.ds.deposit(acno,pswd,amount);

    if(result){
      alert(`${amount} is credited ....balance is: ${result}`);
    }
  }

  withdraw(){
    var acno=this.acno1;
    var pswd=this.pswd1;
    var amount=this.amount1;

    const result=this.ds.withdraw(acno,pswd,amount);

    if(result){
      alert(`${amount} is Debited ....balance is: ${result}`);
    }

  }

  logout(){
    
    //remove uname 
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentAcno');

    //navigate login page
    this.router.navigateByUrl('');

  }
  delete(){

    this.acno=JSON.parse(localStorage.getItem('currentAcno')||'');

  }
  onCancel(){
    this.acno="";
  }

}
