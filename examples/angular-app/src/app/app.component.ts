import { Component, Input, OnInit } from '@angular/core';

declare const RestImport: any;
declare const configImport: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const reactUI = RestImport({
      dom_id: '#rest-import-ui',
      language: 'en',
      config: {
        id: '1234',
        name: 'From library',
        value: 'Save',
      },
    });
  }
}
