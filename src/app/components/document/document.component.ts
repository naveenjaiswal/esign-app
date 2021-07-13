import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
 status:string="hello";
 label:string="hello";
 closeModal: string;
 dataForm: FormGroup;
 
 constructor(private modalService: NgbModal,private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      adhaar: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required, Validators.email]],
    });
  }

  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed`;
    });
  }
  
  isAdhaarValid(): boolean {
    return this.dataForm.valid;
  }

  isOtpValid(): boolean {
    return this.dataForm.valid;
  }

  get f() {
    return this.dataForm.controls;
  }

}
