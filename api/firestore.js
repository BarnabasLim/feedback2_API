import * as config from './firebase.js'
import {initializeApp} from "firebase/app"
import {getFirestore, doc, setDoc,getDoc, getDocs, collection, deleteDoc, updateDoc} from 'firebase/firestore'

const firebaseConfig=config.firebaseConfig;

//Step 1: initalise Firebase
const app=initializeApp(firebaseConfig);

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
        onError(e);
        console.error("Error adding document: ", e);
    }
}


export const db_getFeedback=async(id,onSuccess,onError)=>{
    try{
        
        const docSnapShot=await getDoc(doc(db, `feedbacks/${id}`));
        onSuccess(docSnapShot.data());
    }catch(e){
        onError(e);
        console.error("Error adding document: ", e);
    }
}
export const db_addFeedback=async(feedback, onSuccess, onError)=>{
    try{
        const newFeedbackDoc= doc(collection(db,'feedbacks'));
        const newFeedback={
            ...feedback,
            id:newFeedbackDoc.id
        };
        await setDoc(newFeedbackDoc,newFeedback);
        onSuccess(newFeedback);
    }catch(e){
        onError(e);
        console.error("Error adding document: ", e);
    }
}

export const db_deleteFeedback=async(id, onSuccess, onError)=>{
    try{
        await deleteDoc(doc(db, `feedbacks/${id}`));
        onSuccess(id);
    }catch(e){
        onError(e);
        console.error("Error adding document: ", e);
    }
}

export const db_editFeedback=async(updateFeedback, onSuccess, onError)=>{
    try{
        await updateDoc(doc(db, `feedbacks/${updateFeedback.id}`),updateFeedback);
    }catch(e){
        onError(e);
        console.error("Error adding document: ", e);
    }
}