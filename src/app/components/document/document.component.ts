import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  status: string = "Register Adhaar";
  label: string = "Mutual Non-Disclosure Agreement";
  closeModal: string;
  dataForm: FormGroup;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      adhaar: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      kyc: [false, Validators.requiredTrue]
    });
  }

  triggerModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed`;
    });
  }

  isAdhaarValid(): boolean {
    return this.dataForm.controls.adhaar.valid
  }

  isOtpValid(): boolean {
    return this.dataForm.valid;
  }

  get f() {
    console.log(this.dataForm.controls)
    return this.dataForm.controls;
  }

  onVerify() { }

  onSubmit() {
    this.status = "Signing...";
    setTimeout(() => {
      this.status = "Signed";
    }, 3000)
  }
}
