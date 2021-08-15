import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-content-management-list',
  templateUrl: './content-management-list.component.html',
  styleUrls: ['./content-management-list.component.css']
})
export class ContentManagementListComponent implements OnInit {

  articles = [];

  constructor(
    private router: Router,
    private store: AngularFirestore,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(): void {
    this.store.collection('article').valueChanges({ idField: 'id' })
        .subscribe(response => {
          this.articles = response;
        });
  }

  createClicked(): void {
    this.router.navigate(['/content-management/create']);
  }

  deleteClicked(id: string): void {
    this.store.collection('article').doc(id).delete()
        .then(() => {
          this.toastr.info(
            '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Successfully deleted post!</span>',
              "",
              {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: "alert alert-success alert-with-icon",
                positionClass: "toast-top-right"
              }
            );
          this.getAllArticles();
        }).catch((error => {
          console.error("Error removing document: ", error);
        }));
  }

}
