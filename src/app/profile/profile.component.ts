import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  Perfil: any = {};
  userImage: boolean = true;

  constructor() {}

  ngOnInit() {
    this.getValurStorage();
  }

  getValurStorage() {
    const user = JSON.parse(localStorage.loggedUser)[0];
    this.Perfil = user;
    if (user.image === "N/A") {
      this.userImage = false;
    }
  }
}
