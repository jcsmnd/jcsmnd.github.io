import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  var1 = "\"it\'s me.\"";
  int1 = 10;
  
  clk01(e:string, v:number = 5) {
    console.log('e:', e, 'v:', v);
  }
}
