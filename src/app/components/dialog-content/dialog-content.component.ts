import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {complete: (allow: boolean) => void}
  ) {

  }

  ngOnInit(): void {
  }

  complete(): void {
    this.data.complete(true);
  }

}
