import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'demo-xml-app';
  environment = {
    production: false,
    appName: 'xml app',
    version: '1.0.0',
  };

  ngOnInit(): void {
    console.log(
      `%c 🚀 ${this.environment.appName} %c v${this.environment.version} `,
      'background: #1976d2; color: #fff; font-size:14px; font-weight:bold; padding:4px 8px; border-radius:4px 0 0 4px;',
      'background: #4caf50; color: #fff; font-size:14px; font-weight:bold; padding:4px 8px; border-radius:0 4px 4px 0;'
    );
  }
}
