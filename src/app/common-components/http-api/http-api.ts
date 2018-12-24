import {ApiConfigService} from '../../api-config-service';
import {HttpMethod} from './http-method.enum';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, timeout} from 'rxjs/operators';
import {HttpErrorResponse} from '../../../../node_modules/@angular/common/http';

export class HttpApi<T> {

  baseUrl: string;


  constructor(private apiConfigService: ApiConfigService, private http: HttpClient) {}

  callApi(apiUrl: string, object: T, httpMethod: HttpMethod, isApi: boolean): Observable<T> {
    if (isApi) {
      this.baseUrl = this.apiConfigService.getBaseUrl();
    } else {
      this.baseUrl = this.apiConfigService.getWebUrl();
    }
    const url: string = this.baseUrl + apiUrl;

    let obs: Observable<T>;
    if (httpMethod === HttpMethod.GET) {
      obs = this.generateGetApi(url);
    }
    if (httpMethod === HttpMethod.POST) {
      obs = this.generatePostApi(url, object);
    }
    if (httpMethod === HttpMethod.PUT) {
      obs = this.generatePutApi(url, object);
    }
    if (httpMethod === HttpMethod.DELETE) {
      obs = this.generateDeleteApi(url);
    }
    return obs;
  }

  private generateGetApi(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  private generatePostApi(url: string, object: T) {
    return this.http.post<T>(url, object)
      .pipe(
        timeout(this.apiConfigService.getApiTimeout()),
          catchError(this.handleError));
  }

  private generatePutApi(url: string, object: T): Observable<T> {
    return undefined;
  }

  private generateDeleteApi(url: string): Observable<T> {
    return undefined;
  }


  private handleError(error: HttpErrorResponse): Observable<any> {
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
