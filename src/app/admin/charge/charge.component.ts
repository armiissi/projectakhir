import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.scss']
})
export class ChargeComponent implements OnInit {
  title:any;
  book:any={};
  books:any=[];
  constructor() { }

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
        amount:'750.000',
        category:'Sewa/Kontrak',
        date:'01-5-2021',
        buyment:'Tunai',
        note:'bayar kost bulan5'
      },
      {
        amount:'750.000',
        category:'Sewa/Kontrak',
        date:'01-6-2021',
        buyment:'Tunai',
        note:'bayar kost bulan6'
      },
    ];
  }
}
