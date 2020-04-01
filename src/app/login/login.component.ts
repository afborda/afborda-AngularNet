import { MatSnackBar } from "@angular/material";
import { UserService } from "./../services/user.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  formlogin = this.fb.group({
    login: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  setLocalStorage(value) {
    localStorage.setItem("testObject", JSON.stringify(value));
  }

  onSubmit() {
    const credentials = this.formlogin.value;
    this.userService.loginUser(credentials).subscribe(
      user => {
        this.setLocalStorage(user);
        this.snackBar.open(
          "Logged in Successfuly. Welcome " + user[0].name + " ! ",
          "OK",
          { duration: 2000 }
        );
        this.router.navigateByUrl("/home");
      },
      err => {
        this.snackBar.open("Error ", "OK", { duration: 2000 });
      }
    );
  }
}
