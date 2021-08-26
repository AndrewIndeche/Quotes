import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  MyQuotes:Quote []=[
     new Quote(0,'Mark','celebrity quote','I dont really think i just walk','Paris Hilton',new Date(2006,7,6),0,0),
   ];
      addNewQuote(Quote){
       let QuoteLength = this.MyQuotes.length;
       Quote.id = QuoteLength+1;
       Quote.completeDate = new Date(Quote.completeDate);
       this.MyQuotes.push(Quote);
      }
   removeQuote(toDelete, index){
     if(toDelete){
      let confirmDelete = confirm('Are you sure you want to delete this entry?');

    if(confirmDelete){
      this.MyQuotes.splice(index,1);
     }

   }
 }

  constructor() { }

  ngOnInit(): void {
  }

}
