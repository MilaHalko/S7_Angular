import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from '../app.component'
import {Observable} from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input('toPost') myPost!: Post
  @Output() onRemove = new EventEmitter<number>();

  removePost() {
    this.onRemove.emit(this.myPost.id)
  }

  ngOnDestroy() {
    console.log('Post is destroyed!')
  }
}
