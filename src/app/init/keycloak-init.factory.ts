import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8090' + '/auth',
        realm: 'TEST',
        clientId: 'micro-app',
      }
    });
}
