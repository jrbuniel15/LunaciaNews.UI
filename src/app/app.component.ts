import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  articles = this.store.collection('article').valueChanges({ idField: 'id' });

  constructor(private store: AngularFirestore){
    // this.store.collection('article').add({
    //   'title': 'Article #1',
    //   'author': 'Jan'
    // });

    // this.articles.subscribe(articles => console.log('articles', articles));
  }
}
