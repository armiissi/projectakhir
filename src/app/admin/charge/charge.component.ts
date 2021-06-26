import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChargeDetailComponent } from '../charge-detail/charge-detail.component';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.scss']
})
export class ChargeComponent implements OnInit {
  title:any;
  book:any={};
  books:any=[];
  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.title='Charge';
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

  chargeDetail(data: any,idx: number)
 {
   let dialog=this.dialog.open(ChargeDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.books.push(res);      
        //jika tidak maka perbarui data  
       else this.books[idx]=data; 
     }
   })
  }
  
  deleteCharge(idx: any)
  {
    var conf=confirm('Delete Item?');
    if(conf)
    this.books.splice(idx,1);
  }

}
