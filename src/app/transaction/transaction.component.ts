import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  //to hold acount number
  acno:any;

  //to hold transaction details
  transaction:any;

  
  constructor(private ds:DataserviceService) {

    //to get the value of current acno from data services

    this.acno=this.ds.currentAcno;
    this.transaction=this.ds.getTransaction(this.acno)
    console.log(this.transaction);

  }

  ngOnInit(): void {
  }

}
