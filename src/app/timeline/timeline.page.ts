import { Component } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage {
  handleScrollStart() {
    console.log('scroll start');
  }


  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', JSON.stringify(ev.detail));
  }


  handleScrollEnd() {
    console.log('scroll end');
  }


  newPost: any = { caption: '', username: 'user1213', avatar: 'assets/image/user.jpg', likes: 0,
  comments: 0,
  liked: false,}; // Object to hold new post data


  timelinePosts : any[] = [
    {
      username: 'uRyz',
      avatar: 'assets/image/user.jpg',
      image:'assets/image/Kchicken Rice .jpg',
      caption: 'Lemon Tree sangat recomended! sedap dan murah',
      likes: 15,
      comments: 3,
      liked: false,
    },
    {
      username: 'Zyzyey',
      avatar: 'assets/image/user.jpg',
      image: 'assets/image/Lemon Tree Spaggethi.jpg',
      caption: 'Stay Safe and Enjoy Your Meals! Lurve from Lemon Tree <3',
      likes: 25,
      comments: 3,
      liked: false,
    },
    {
      username: 'Ysfnrh',
      avatar: 'assets/image/user.jpg',
      image: 'assets/image/Richiamo.jpg',
      caption: 'Petang-petang ni, seronok juga lepak Richiamo',
      likes: 35,
      comments: 3,
      liked: false,
    },
    {
      username: 'yyyhnry',
      avatar: 'assets/image/user.jpg',
      image: 'assets/image/Dumpling Cengal.jpg',
      caption: 'Wow! Sedap dumpling ni pedas2',
      likes: 100,
      comments: 3,
      liked: false,
    },
    {
      username: 'Syfhnry',
      avatar: 'assets/image/user.jpg',
      image: 'assets/image/BurgerKDSE.jpg',
      caption: 'Burger pakcik KDSE',
      likes: 1000,
      comments: 20,
      liked: false,
    },
  ];
  toggleLike(post: any) {
    post.liked = !post.liked;
    if (post.liked) {
      post.likes++;
    } else {
      post.likes--;
    }
  }
 
  newPostText: string = ''; // Variable to store new post text


  constructor() { }


  // addPost() {
  //   if (this.newPost.caption.trim() !== '' && this.newPost.username.trim() !== '') {
  //     // Add the new post to the beginning of the array
  //     this.timelinePosts.unshift({ ...this.newPost, likes: 0, comments: 0 });
  //     // Clear the input after adding the post
  //     this.newPost.caption = '';
  //     this.newPost.username = '';
  //     this.newPost.avatar = '';
  //   }
  // }
  addPost() {
    if (this.newPost.caption.trim() !== '') {
    // this.timelinePosts.unshift({ text: this.newPostText, date: new Date() });
    const newPostObject = { ...this.newPost, isNewPost: true };
    this.timelinePosts.unshift(newPostObject);
    this.clearPostForm(); // Clear the form after adding post
  }
}


  clearPostForm() {
    // Clear the form after adding a post
    this.newPostText = ''; // Clear the text input
    this.newPost.caption = '';
  }
};
