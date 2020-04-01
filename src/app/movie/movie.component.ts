import { UserService } from "./../services/user.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  Movies: any = [];
  MoviesFears: any = [];
  MoviesLoves: any = [];

  constructor(private useService: UserService) {}

  ngOnInit() {
    this.loadMovies();
    this.getFilter({ category: "love" });
    // this.getFilter({ category: "action" });
    // this.getFilter({ category: "fear" });
  }

  loadMovies() {
    return this.useService.getMovies().subscribe((data: {}) => {
      this.Movies = data;
    });
  }

  setLocalStorage(value) {
    localStorage.setItem("loggedUser", JSON.stringify(value));
  }

  getFilter(value) {
    this.useService.getFilter(value).subscribe(movie => {
      console.log(movie);
      this.MoviesLoves = movie;
    });
  }
}
