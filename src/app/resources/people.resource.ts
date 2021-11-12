import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeopleResource<TModel> {
  /** Private BASE url - set only in the base resource, cannot be changed by other resources */
  private BASE_API_URL = 'https://swapi.dev/api/';

  constructor(private httpClient: HttpClient) {}

  public SearchPeople(searchString: string): Observable<TModel> {
    return this.httpClient
      .get<TModel>(`${this.BASE_API_URL}people/?search=${searchString}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Handles any errors by throwing a window alert - stretch goal would be implementing error
   * handling in components and returning a string to that component
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    // Throw an alert to the browser window
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
