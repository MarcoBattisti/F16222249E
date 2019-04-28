import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '../../../../../node_modules/@angular/common/http';
import {Email} from '../models/email';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  constructor(private http: HttpClient) { }

  sendEmail (email: Email, emailUrl: string): Observable<Email> {
    console.log('Nel metodo sendEmail');
    return this.http.post<Email>(emailUrl, email)
      .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
