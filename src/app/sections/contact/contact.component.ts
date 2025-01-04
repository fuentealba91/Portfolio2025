import { Component } from '@angular/core';
import { FadeInDirective } from '@shared/fade-in.directive';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { faMailBulk, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Sweetalert from 'sweetalert2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact',
  imports: [
    FadeInDirective,
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  submitSuccess = false;
  cursorChar: string = '|'; // Caracter del cursor parpadeante
  formUrl: string = 'https://formspree.io/f/xlddobwo'; // URL del formulario de contacto
  faMailBulk = faMailBulk; // Ícono para el formulario de contacto
  faEnvelope = faEnvelope; // Ícono para el formulario de contacto

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  getErrorName(fieldName: string): string | null {
    const field = this.contactForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'El nombre es requerido';
    }
    if (field?.hasError('minlength')) {
      const requiredLength = field?.errors?.['minlength']?.requiredLength;
      return `El largo del nombre debe ser superior a ${requiredLength} caracteres`;
    }
    return null;
  }

  getErrorEmail(fieldName: string): string | null {
    const field = this.contactForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'El email es requerido';
    }
    if (field?.hasError('email') || field?.hasError('pattern')) {
      return 'El email no es válido';
    }
    return null;
  }

  getErrorAsunto(fieldName: string): string | null {
    const field = this.contactForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'El asunto es requerido';
    }
    if (field?.hasError('minlength')) {
      const requiredLength = field?.errors?.['minlength']?.requiredLength;
      return `El largo del asunto debe ser superior a ${requiredLength} caracteres`;
    }
    return null;
  }

  getErrorMessage(fieldName: string): string | null {
    const field = this.contactForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'El mensaje es requerido';
    }
    if (field?.hasError('minlength')) {
      const requiredLength = field?.errors?.['minlength']?.requiredLength;
      return `El largo del mensaje debe ser superior a ${requiredLength} caracteres`;
    }
    return null;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submitted = true;

      fetch(this.formUrl, {
        method: 'POST',
        body: JSON.stringify(this.contactForm.value),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        Sweetalert.fire({
          icon: 'success',
          text: 'Tu mensaje ha sido enviado con éxito',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.contactForm.reset();
          this.submitted = false;
        });
      });
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}
