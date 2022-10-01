import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {
  }
  onSenddata(data){
    this.service.sendNoti(data.value)
  }

}