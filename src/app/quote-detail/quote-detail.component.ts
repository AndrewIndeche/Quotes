import { Component,Input,Output, OnInit,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() MyQuote: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){

  }
  upvote(){
   this.MyQuote.likes+=1;
  }
  downvote(){
   this.MyQuote.dislikes+=1;
  }

  constructor() { }

  ngOnInit() {
  }

}
