import {Component, EventEmitter, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  title = ""
  text = ""
  addPost() {
    if (this.title.trim()&&this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      console.log('New post is added!', post)
      this.title=this.text=''
    }
  }
}
