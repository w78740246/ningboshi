import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
  providers: [LoggingService]
})
export class NavComponent implements OnInit {
  // 页面一加载，就让创建的对象logger，继承LoggingService类，调周其中的log()方法
  constructor(private logger: LoggingService) { }

  logIt() {
    this.logger.log(); //调用所继承的方法
  }



  ngOnInit() {
  }

}
