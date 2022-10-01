import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  myMsg:string=''
  constructor( private recivedMsg:ServiceService) { }

  ngOnInit() {
    this.recivedMsg.subjectNotification.subscribe(response=>{
      this.myMsg=response
    })
  }

}