import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- import FormsModule
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.html',
  styleUrls: ['./registration.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule] // <-- import modules, not NgForm
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    phone: '',
  };

  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  submitRegistration() {
    if (!this.user.name || !this.user.email || !this.user.phone ) {
      this.errorMessage = 'Tafadhali jaza taarifa zote';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const apiUrl = 'https://your-backend.com/api/register';

    this.http.post(apiUrl, this.user).subscribe({
      next: () => {
        this.successMessage = 'Umejisajili kwa mafanikio!';
        this.loading = false;
        this.user = { name: '', email: '', phone: '' };
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Kuna tatizo, tafadhali jaribu tena';
        this.loading = false;
      }
    });
  }
}