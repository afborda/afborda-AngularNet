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
  constructor(private useService: UserService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    console.log(this.useService.getMovies());
    return this.useService.getMovies().subscribe((data: {}) => {
      this.Movies = data;
    });
  }
}
