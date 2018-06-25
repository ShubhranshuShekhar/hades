import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";

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
    this.postsRef = this.afs.collection("posts");
    this.namelistRef = this.afs.collection("namelist");
  }

  getNameList() {
    return this.afs.collection("namelist").doc("IXA2018");

    //   return this.afs.collection<NameList>('namelist', ref =>
    //   ref
    //     .where('userId', '==', userId)
    //  );
  }

  getAttendancenyDivision(division: string) {
    return this.afs.collection("attendance").ref.where("division", "==", division);
  }

  // createAttendanceStudent(day: string, date: string, month: string, year: string, user_id: string, division: string, present: boolean) {
  createAttendanceStudent(
    details: any,
    day: string, date: string, month: string, year: string,
    division: string,
  ) {
    var batch = this.afs.firestore.batch();
    var collectionRef = this.afs.collection("attendanceList");

    console.log(" i am in DB create attendance");
    // console.log(details);
    for (let key in details) {
      console.log(details[key]);
      var docId = key + "_"+ date + "-" + month + "-" + year;
      var doc = collectionRef.doc(docId)
      doc.set({
        "student_id": key,
        "present": details[key],
        "date": date,
        "day": day,
        "month": month,
        "year": year,
        "divsion": division,
      })
    }
    var attendance = {
      // "student_id": user_id,
      // "date": date,
      // "day": day,
      // "month": month,
      // "year": year,
      // "divsion": division,
      // "present": present,
    }
    batch.commit().then(data => {
      return data
    })
      .then(err => {
        return err;
      })
    // return ("Successful");
    // return this.afs.collection("attendanceList").ref.add(attendance);
  }

  getStudentsByDivision(division: string) {
    return this.afs
      .collection("students")
      .ref.where("division", "==", division);
  }

  getRecentPosts() {
    return this.afs.collection<Post>("posts", ref =>
      ref.orderBy("createdAt", "desc").limit(10)
    );
  }

  getUserPosts(userId: string) {
    return this.afs.collection<Post>("posts", ref =>
      ref
        .orderBy("createdAt", "desc")
        .where("userId", "==", userId)
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
    return this.afs.collection("users", ref => ref.limit(10)).valueChanges();
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
      .collection("relationships")
      .doc(docId)
      .set(data);
  }

  unfollow(followerId: string, followedId: string) {
    const docId = this.concatIds(followerId, followedId);

    return this.afs
      .collection("relationships")
      .doc(docId)
      .delete();
  }

  isFollowing(followerId: string, followedId: string) {
    const docId = this.concatIds(followerId, followedId);

    return this.afs
      .collection("relationships")
      .doc(docId)
      .valueChanges();
  }

  // Helper to format the docId for relationships
  private concatIds(a: string, b: string) {
    return `${a}_${b}`;
  }
}
