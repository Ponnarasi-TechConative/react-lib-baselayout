import { Component, Input, OnInit } from '@angular/core';

declare const SampleImport: any;
declare const configImport: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const reactUI = SampleImport({
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
