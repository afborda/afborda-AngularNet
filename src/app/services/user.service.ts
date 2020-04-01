import { Movie } from "./../models/movie";
import { User } from "./../models/user";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  url = "http://localhost:3333/";

  constructor(private HttpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  loginUser(user: User): Observable<User> {
    return this.HttpClient.post<User>(
      this.url + "user",
      JSON.stringify(user),
      this.httpOptions
    ).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getMovies(): Observable<Movie[]> {
    return this.HttpClient.get<Movie[]>(`${this.url}movies`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
