import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{value}}</h1>`,
})
export class AppComponent {
  value = 'World';

  constructor(private http: HttpClient) {
    this.http.get('/api/HelloWorld')
      .subscribe((resp: any) => this.value = resp.text);
  }
}
