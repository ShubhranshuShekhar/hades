import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';


export interface Post {
  userId: string;
  createdAt: Date;
  image: string;
  content: string;
  likeCount: number;
  [key: string]: any;
}

export interface NameList {
  userId: string;
  fist_name: string;
  last_name: string;
}

@Injectable()
export class DatabaseProvider {
  private postsRef: AngularFirestoreCollection<Post>;
  private namelistRef: AngularFirestoreCollection<NameList>;
  constructor(private afs: AngularFirestore) {
    this.postsRef = this.afs.collection('posts');
    this.namelistRef = this.afs.collection('namelist')
  }

  getNameList() {
    return this.afs.collection("namelist").doc('IXA2018')

    //   return this.afs.collection<NameList>('namelist', ref =>
    //   ref
    //     .where('userId', '==', userId)
    //  );

  }

  getStudents() {
    return this.afs.collection('class');
  }

  getRecentPosts() {
    return this.afs.collection<Post>('posts', ref =>
      ref.orderBy('createdAt', 'desc').limit(10)
    );
  }

  getUserPosts(userId: string) {
    return this.afs.collection<Post>('posts', ref =>
      ref
        .orderBy('createdAt', 'desc')
        .where('userId', '==', userId)
        .limit(10)
    );
  }

  createPost(userId: string, data: Post) {
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    const doc = { userId, createdAt, ...data };
    return this.postsRef.add(doc);
  }

  deletePost(id: string) {
    return this.postsRef.doc(id).delete();
  }

  //// HEARTS ////

  createHeart(userId: string, post: Post) {
    const hearts = post.hearts || {};
    hearts[userId] = true;

    return this.afs.doc(`posts/${post.id}`).update({ hearts });
  }

  removeHeart(userId: string, post: Post) {
    const hearts = post.hearts;
    delete post.hearts[userId];

    return this.afs.doc(`posts/${post.id}`).update({ hearts });
  }

  //// RELATIONSHIPS ////

  getUsers() {
    return this.afs.collection('users', ref => ref.limit(10)).valueChanges();
  }

  follow(followerId: string, followedId: string) {
    const docId = this.concatIds(followerId, followedId);
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();

    const data = {
      followerId,
      followedId,
      createdAt
    };

    return this.afs
      .collection('relationships')
      .doc(docId)
      .set(data);
  }

  unfollow(followerId: string, followedId: string) {
    const docId = this.concatIds(followerId, followedId);

    return this.afs
      .collection('relationships')
      .doc(docId)
      .delete();
  }

  isFollowing(followerId: string, followedId: string) {
    const docId = this.concatIds(followerId, followedId);

    return this.afs
      .collection('relationships')
      .doc(docId)
      .valueChanges();
  }

  // Helper to format the docId for relationships
  private concatIds(a: string, b: string) {
    return `${a}_${b}`;
  }
}
