import { Component, OnInit, Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Two-way binding DEMO'
  token = ''

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getRemoteToken()
  }

  getOptions() {
    return [
      {'id': 1, 'title': 'one'}, 
      {'id': 2, 'title': 'two'}, 
    ]
  }

  getRemoteToken() {
    let url: string = 'http://localhost:8888/api/token'
    let body = new FormData()
    this.httpClient.post<any>(url, body).subscribe(data => {
      this.token = data.token
    })
  }

  getRemoteOptions() {
    /*
    let url: string = 'localhost:8888/api/token'
    let body = new FormData()
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:4200'
    })
    let options = {'headers': headers}
    this.httpClient.post<any>(url, options).subscribe(data => {
      this.token = data
    })
    */

    return this.getOptions()
  }
}
