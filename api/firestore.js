import * as config from './firebase.js'
import {initalizeApp} from "firebase/app"
import {getFirestore, doc, setDoc, getDocs, collection} from 'firebase/firestore'

const firebaseConfig=config.firebaseConfig;

//Step 1: initalise Firebase
const app=initalizeApp(firebaseConfig);

//Step 2: initalise Service
const db=getFirestore(app);

export const db_getFeedbacks=async(onSuccess,onError)=>{
    try{
        const querySnapShot=await getDocs(collection(db, 'feedbacks'));
        let feedbacks=[];
        querySnapShot.forEach((doc)=>{
            feedbacks.push(doc.data());
        })
        onSuccess(feedbacks);
    }catch(e){
        onerror(e);
        console.error("Error adding document: ", e);
    }
}

export const db_addFeedback=async(feedback, onSuccess, onError)=>{
    try{
        const newFeedbackDoc= doc(collection(db,'feedbacks'));
        const newFeedback={
            ...feedback,
            id:newFeedback.id
        };
        await setDoc(newFeedbackDoc,newFeedback);
        onSuccess(newFeedback);
    }catch(e){
        onerror(e);
        console.error("Error adding document: ", e);
    }
}