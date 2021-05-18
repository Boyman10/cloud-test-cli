import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  /**
   * Will be removed / used for simple auth testing
   * 1st attempt before seeing other practises
   */

  onPreLogin()
  {
    window.location.href = ('http://localhost:8090/auth/realms/TEST/protocol/openid-connect/auth?response_type=code&state=&client_id=micro-app&scope=openid&redirect_uri=http%3A%2F%2Flocalhost%3A4200');
  }
  onLogin() {
    // redirect to login page
    const clientId = 'micro-app';
    const scope = 'openid';
    const clientSecret = 'd7ed485e-08f5-410e-a42e-3aec87cf9085';
    const url = 'http://localhost:8090/auth/realms/TEST/protocol/openid-connect/token';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization' :'Basic ' + btoa(clientId + ":" + clientSecret)
      })
    };

    const body = {
      'Scope': scope,
      'redirect-uri': 'http://localhost:4200/'
    };
    this.http.post<any>(url, body, httpOptions).subscribe(data => {
      console.log(data);
    });
  }
}
