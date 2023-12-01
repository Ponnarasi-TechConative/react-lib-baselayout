import { Component, Input, OnInit } from '@angular/core';

declare const SampleImport: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const reactUI = SampleImport({
      dom_id: '#sample-import-ui',
      language: 'en',
      config: {
        id: '1234',
        name: 'Render from angular',
        value: 'Save',
      },
    });
  }
}
