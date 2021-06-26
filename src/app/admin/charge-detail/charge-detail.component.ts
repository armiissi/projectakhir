import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-charge-detail',
  templateUrl: './charge-detail.component.html',
  styleUrls: ['./charge-detail.component.scss']
})
export class ChargeDetailComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<ChargeDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  saveData()
  {
    this.dialogRef.close(this.data);
  }

}
