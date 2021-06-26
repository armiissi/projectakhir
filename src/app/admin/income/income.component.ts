import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  title:any;
  book:any={};
  books:any=[];
  constructor() { 

  }

  ngOnInit(): void {
    this.title='Income';
    this.book={
      title:'Angular untuk Pemula',
      author:'Farid Suryanto',
      publisher:'Sunhouse Digital',
      year:2020,
      isbn:'8298377474',
      price:70000
    };
    this.getBooks();
  }

  getBooks()
  {
    //4. memperbarui koleksi books
    this.books=[
      {
        amount:'300.000',
        category:'Gaji',
        date:'22-5-2021',
        note:'gaji bulan mei'
      },
      {
        amount:'100.000',
        category:'Bous',
        date:'22-5-2021',
        note:'Bonus bulan mei'
      }
    ];
  }

}
