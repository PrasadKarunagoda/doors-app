import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})
export class DoorComponent implements OnInit {

  @Input() doorData: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
