import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoService } from '../../service/demo.service';
import { TaxTotal, XMLResponse } from '../../interfaces/xml-response';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  private demoService = inject(DemoService);

  selectedFile: File | null = null;
  response: XMLResponse | null = null;
  taxTotal: any | null = null;

  // private fb = inject(FormBuilder);
  // public uploadForm: FormGroup = this.fb.group({
  //   // file: ['', [Validators.required]],
  // });

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  upload() {
    if (!this.selectedFile) return;
    this.demoService.upload(this.selectedFile).subscribe((res) => {
      console.log({ res });
      this.response = res;
      localStorage.setItem('response', JSON.stringify(res));
    });
  }

  getFirstTaxTotal(taxTotal: any) {
    if (Array.isArray(taxTotal)) {
      // Si es un array, devuelve el primer elemento
      return taxTotal[0];
    } else if (typeof taxTotal === 'object' && taxTotal !== null) {
      // Si es un objeto, devuélvelo directamente
      return taxTotal;
    } else {
      // Si no es un array ni un objeto válido, devuelve null o lanza un error
      console.error('El formato de TaxTotal no es válido');
      return null;
    }
  }

  getSecondTaxTotal(taxTotal: any) {
    if (Array.isArray(taxTotal)) {
      // Si es un array, devuelve el primer elemento
      return taxTotal[1];
    } else if (typeof taxTotal === 'object' && taxTotal !== null) {
      // Si es un objeto, devuélvelo directamente
      return taxTotal;
    } else {
      // Si no es un array ni un objeto válido, devuelve null o lanza un error
      console.error('El formato de TaxTotal no es válido');
      return null;
    }
  }
}
