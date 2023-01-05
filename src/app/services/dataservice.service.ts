import { Injectable } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  //login name display
  currentUser:any;

  //login acount number display
  currentAcno:any;

  
  userDetails:any = { //object of objects
    1002: { acno: 1002, username: 'Sachin', password: 102, balance:4000,transaction:[]},
    1003: { acno: 1003, username: 'Sayooj', password: 103, balance:5000,transaction:[] },
    1004: { acno: 1004, username: 'Vyshnav', password: 104, balance:1000,transaction:[] },
    1005: { acno: 1005, username: 'Abram', password: 105, balance:6000,transaction:[] },
    1006: { acno: 1006, username: 'Shyam', password: 106, balance:3000,transaction:[] },
    
    
}

constructor() {

  this.getDetails()
}  //dependancy

//saveDetails() - to save the data in the localstorage

saveDetails(){
  if(this.userDetails){
    localStorage.setItem('dataBase',JSON.stringify(this.userDetails));
  }
  if(this.currentAcno){
    localStorage.setItem('currentAcno',JSON.stringify(this.currentUser));
  }
  if(this.currentUser){
    localStorage.setItem('currentUser',JSON.stringify(this.currentUser));
  }
}

//getDetaila() -to get the data from the local storage

getDetails(){
  if(localStorage.getItem('dataBase')){
    this.userDetails=JSON.parse(localStorage.getItem('dataBase')  || '');
  }
}

getcurrentUser(){
  if(localStorage.getItem('currentUser')){
    this.userDetails=JSON.parse(localStorage.getItem('currentUser')|| '');
  }
}

getcurrentAcno(){
  if(localStorage.getItem('currentAcno')){
    this.userDetails=JSON.parse(localStorage.getItem('currentAcno') || '');
  }
}


register(acno:any,username:any,password:any){
  let userDetails=this.userDetails;

  if(acno in userDetails){
    return false;
  }

  else{
    userDetails[acno]={
      acno,
      username,
      password,
      balance:0,
      transaction:[]
    }

    console.log(userDetails);
    this.saveDetails(); //function call
    
    return true;
  }

}

   login(acno:any,pswd:any){
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        this.currentUser=this.userDetails[acno]['username']
        this.currentAcno=acno;
        this.saveDetails(); //function call
        return true;
      }
      else{
        alert('Incorrect password');
        return false;
      }
    }
    else{
      alert('Invalid User');
      return false;
    }

   }

   deposit(acno:any,pswd:any,amt:any){
    var userDetails=this.userDetails;
    var amount=parseInt(amt);
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        userDetails[acno]['balance']+=amount;
        userDetails[acno]['transaction'].push({
          type:'credit',
          amount
        
        })
        console.log(userDetails);
        this.saveDetails();  //function call
        

        return userDetails[acno]['balance'];
      }
      else{
        alert('Incorrect password');
        return false;
      }
    }
    else{
      alert('Invalid User');
      return false;
    }

   
   }

   withdraw(acno:any,pswd:any,amt:any){
    var userDetails=this.userDetails;
    var amount=parseInt(amt);
    if(acno in userDetails){

      if(pswd==userDetails[acno]['password']){

        if (userDetails[acno]['balance']>amount){

          userDetails[acno]['balance']-=amount;

          userDetails[acno]['transaction'].push({
            type:'debit',
            amount
          })
          console.log(userDetails);
          this.saveDetails();
          
          return userDetails[acno]['balance'];

        }
      else{
        alert('Insufficient Balance');
        return false;
      }
    }
    else{
      alert('Invalid User');
      return false;
    }

   
   }
    
  }

  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }


}
