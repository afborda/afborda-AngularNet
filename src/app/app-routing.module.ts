import { MoviePlayComponent } from "./movie-play/movie-play.component";
import { MetricsComponent } from "./metrics/metrics.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";
import { MovieComponent } from "./movie/movie.component";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "movie", component: MovieComponent },
  { path: "login", component: LoginComponent },
  { path: "metrics", component: MetricsComponent },
  { path: "movieplay", component: MoviePlayComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
