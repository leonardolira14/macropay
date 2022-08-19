import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-detailsproducto',
  templateUrl: './detailsproducto.component.html',
  styleUrls: ['./detailsproducto.component.scss']
})
export class DetailsproductoComponent implements OnInit {
@Input() showmodal= false;
@Input() marca= '';
@Input() modelo= '';
@Input() precio= '';
@Input() imagen= '';
  constructor(

  ) { }

  ngOnInit(): void {
  }

}
