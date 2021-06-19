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
        title:'Angular untuk Pemula',
        author:'Farid Suryanto',
        publisher:'Sunhouse Digital',
        year:2020,
        isbn:'8298377474',
        price:70000
      },
      {
        title:'Membuat Aplikasi Maps menggunakan Angular',
        author:'Farid Suryanto',
        publisher:'Sunhouse Digital',
        year:2020,
        isbn:'82983323455',
        price:75000
      }
    ];
  }

}
