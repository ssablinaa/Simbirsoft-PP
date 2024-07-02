import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';
  constructor(private http: HttpClient) {}

  public getAnimals(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.status);
        return EMPTY;
      }),
    );
  }
}
