import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UploadFileService } from '../put-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() messageEvent = new EventEmitter<string>();
  @Input() failedFile = false;

  submitted = false;
  form = new FormGroup({
    jsonString: new FormControl(''),
    file: new FormControl('')
  });

  jsonString = '';
  disabled = true;
  data: any;
  file: any;

  editedFile: any;

  async checkJSON(event) {
    // get value from text area
    const type = event.target.type;
    let jsonValue;
    if (type === 'file') {
      let file;
      try {
        file = event.srcElement.files[0];
        this.file = file;
      } catch (e) {
        console.error('Error reading file', e);
      }
      if (file) {
        jsonValue = await this.readFile(file);
      }
    } else {
      jsonValue = event.target.value;
    }
    try {
      this.data = JSON.parse(jsonValue);
      this.disabled = false;
    } catch (ex) {
      this.disabled = true;
    }
  }

  readFile(inputFile) {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException('Problem parsing input file.'));
      };

      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsText(inputFile, 'UTF-8');
    });
  }

  sendMessage() {
    this.messageEvent.emit(this.data);
  }

  onSubmit() {
    this.submitted = true;
    this.sendMessage();
    const self = this;
    setTimeout(() => {
      if (!self.failedFile) {
        self.editedFile = this.uploadFileService.uploadfile(this.file);
      }
    }, 5000);
  }
  constructor(private uploadFileService: UploadFileService) {}
}
