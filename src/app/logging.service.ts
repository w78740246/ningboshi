import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log() {
    console.log('i am logging...公共服务')
  }

  constructor() {

  }
}
