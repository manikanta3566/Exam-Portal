import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserServiceService } from '../../services/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatCard } from '@angular/material/card';

export type Role = 'ADMIN' | 'USER'; // extend as needed

export interface User {
  id: string;
  active: boolean;
  password: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  roles: Role[];
}

@Component({
  selector: 'app-signup',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCard
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private snakBar:MatSnackBar
  ) {}
  ngOnInit(): void {
    this.userForm = this.fb.group({
      active: [true],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      roles: this.fb.array([this.fb.control('USER')]), // default role
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userService.addUser(this.userForm.value).subscribe(
        (data) => {
          this.userForm.reset();
          this.snakBar.open("Successfully Registred", "",{
            duration:2000
          });
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  reset() {
    this.userForm.reset();
  }
}
