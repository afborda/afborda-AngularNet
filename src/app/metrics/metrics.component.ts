import { UserService } from "./../services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-metrics",
  templateUrl: "./metrics.component.html",
  styleUrls: ["./metrics.component.scss"]
})
export class MetricsComponent implements OnInit {
  Movies: any = [];
  TopMovies: any = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    return this.userService.getMovies().subscribe((data: {}) => {
      this.Movies = data;
      this.topMovies(data);
    });
  }

  topMovies(value) {
    const topMovies = value.sort((a, b) => {
      return a.views > b.views ? 1 : b.views > a.views ? -1 : 0;
    });
    this.TopMovies = topMovies.reverse();
    console.log(topMovies);
  }
}
