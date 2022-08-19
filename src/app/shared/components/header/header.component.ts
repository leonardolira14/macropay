import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cantItems:number | undefined = 0;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('CarShop')){
      this.cantItems = localStorage.getItem('CarShop')?.length;
    }
  }

}
