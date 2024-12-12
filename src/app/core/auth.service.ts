import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

interface FirebaseRegisterResponse{
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  readonly #http = inject(HttpClient); //readonly pour pas que la dépendance ne soit muté
  
  register(email:string, password: string): Observable<FirebaseRegisterResponse>{
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`;
    const body = { email, password, returnSecureToken: true };

    return this.#http.post<FirebaseRegisterResponse>(url, body);
  }
}
