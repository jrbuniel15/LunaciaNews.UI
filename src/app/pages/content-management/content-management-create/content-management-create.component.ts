import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-content-management-create',
  templateUrl: './content-management-create.component.html',
  styleUrls: ['./content-management-create.component.css']
})
export class ContentManagementCreateComponent implements OnInit {

  sampleForm1: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required)
  });

  sampleForm2: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required)
  });

  constructor(
    private store: AngularFirestore,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  submitSampleForm1Clicked(): void {
    this.store.collection('article').add({
      'title': this.sampleForm1.get('title').value,
      'author': this.sampleForm1.get('author').value
    }).then(() => {
      this.toastr.info(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Successfully created post!</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: "toast-top-right"
          }
        );
      this.router.navigate(['/content-management']);
    }).catch((error => {
      console.error("Error writing document: ", error);
    }));
  }

  submitSampleForm2Clicked(): void {
    this.store.collection('article').add({
      'title': this.sampleForm2.get('title').value,
      'author': this.sampleForm2.get('author').value
    }).then(() => {
      this.toastr.info(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Successfully created post!</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: "toast-top-right"
          }
        );
      this.router.navigate(['/content-management']);
    }).catch((error => {
      console.error("Error writing document: ", error);
    }));
  }
}
