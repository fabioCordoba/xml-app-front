import { Component, inject, OnInit } from '@angular/core';
import { XMLResponse } from '../../interfaces/xml-response';
import { DemoService } from '../../service/demo.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent implements OnInit {
  private demoService = inject(DemoService);
  response: XMLResponse | null = null;

  constructor() {
    const localResponse = localStorage.getItem('response');
    if (localResponse) {
      this.response = JSON.parse(localResponse);
      console.log(this.response); // Mostrar el objeto en la consola
    } else {
      console.error('No se encontró el JSON en localStorage');
    }
  }

  export() {
    console.log('export');
    // const jsondata = [
    //   {
    //     id: 1,
    //     name: 'Juan Pérez',
    //     email: 'juan@example.com',
    //   },
    //   {
    //     id: 2,
    //     name: 'Ana López',
    //     email: 'ana@example.com',
    //   },
    //   {
    //     id: 3,
    //     name: 'Carlos Sánchez',
    //     email: 'carlos@example.com',
    //   },
    // ];

    this.demoService.export(this.response).subscribe((res: Blob) => {
      const blob = new Blob([res], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  ngOnInit(): void {}
}
