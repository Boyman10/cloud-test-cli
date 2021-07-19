import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(protected readonly keycloak: KeycloakService) {
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
  async onLogout() {
    await this.keycloak.logout(window.location.origin + '/');
  }
}
