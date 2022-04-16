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
  options = [
    {'id': 1, 'title': 'one'}, 
    {'id': 2, 'title': 'two'}
  ]
  remoteOptions = this.options

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.requestToken()
      .then((data) => {
        console.log('getToken.then.data: ' + JSON.stringify(data))
        this.token = data.token
        this.fillRemoteOptions()
      })
      .catch((error) => {
        console.error('getToken.catch.error: ' + error)
      })
  }

  requestToken() {
    let url: string = this.url('/api/token')
    let body = new FormData()
    return this.httpClient.post<any>(url, body).toPromise()
  }

  url(endpoint: string) {
    return 'http://localhost:8888' + endpoint
  }

  fillRemoteOptions() {
    let url = this.url('/api/items')
    let body = new FormData()
    this.httpClient.post<any>(url, body).toPromise()
      .then((data) => {
        console.log('getRemoteOptions')
        console.log(data)
        this.remoteOptions = data.realItems
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
