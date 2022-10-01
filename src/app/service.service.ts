import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ServiceService {

  
  constructor() { }
 
  public subjectNotification= new Subject<string>();

sendNoti(data){
  this.subjectNotification.next(data)
}
}