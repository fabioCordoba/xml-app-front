import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoService } from '../../service/demo.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  private demoService = inject(DemoService);
  private fb = inject(FormBuilder);
  public uploadForm: FormGroup = this.fb.group({
    // file: ['', [Validators.required]],
  });

  upload() {
    const { file } = this.uploadForm.value;
    this.demoService.upload(file).subscribe((res) => {
      console.log({ res });
    });
  }
}
