import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
//import { JwtHelperService } from '@auth0/angular-jwt';
//const jwt = new JwtHelperService();

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    public register(userData: any): Observable<any> {
        return this.http.post('api/v1/users/register', userData);
    }

    public login(userData: any): Observable<any> {
        return this.http.post('api/v1/users/auth', userData).map(
            (token: string) => this.saveToken(token));
    }

    private saveToken(token: string): string {
        localStorage.setItem('bwm_auth', token);
        //this.decodedToken = jwt.decodeToken(token);
        return token;
    }
}