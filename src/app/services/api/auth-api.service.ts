import { inject, Injectable } from '@angular/core';
import { ILoginRequest } from '../models/user-api.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthApiService {

    private readonly URL_USER = `white_${environment.domain}/auth/login`;
	private readonly _httpCLient = inject(HttpClient);

    login(user: ILoginRequest): Observable<{ token: string }> {
		return this._httpCLient.post<{ token: string }>(this.URL_USER, user);
	}
}