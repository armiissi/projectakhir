import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-income-detail',
  templateUrl: './income-detail.component.html',
  styleUrls: ['./income-detail.component.scss']
})
export class IncomeDetailComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<IncomeDetailComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  saveData()
  {
    this.dialogRef.close(this.data);
  }


}
