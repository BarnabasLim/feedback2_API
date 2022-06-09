import {db_getFeedbacks,db_getFeedback, db_addFeedback,db_deleteFeedback,db_editFeedback} from '../api/firestore.js'
// let feedbacks=[
//     {
//         "id":"2992h929ce2",
//         "rating":9,
//         "text": "best book ever written"
//     },
//     {
//         "id":"392h9232442",
//         "rating":8,
//         "text": "I know what it is"
//     }
// ]


export const getFeedbacks=async(req,res)=>{
    //1. Access req.body or req.params
    let feedbacks=[]
    //2. Interact with database
    await db_getFeedbacks((ans)=>{feedbacks=ans},()=>{})
    //3. Send res
    res.send(feedbacks);
};


export const getFeedback=async(req, res)=>{
    //1. Access req.body or req.params
    const {id}=req.params;
    //2. Interact with database
    // const feedback=feedbacks.filter((item)=>item.id===id);
    let feedback;
    await db_getFeedback(id, (ans)=>{feedback=ans},()=>{})
    //3. Send res
    res.send(feedback);
}

export const addFeedback=async(req, res)=>{
    //1. Access req.body or req.params
    const feedback=req.body;
    //2. Interact with database
    // if(feedbacks.find((item)=>item.id==feedback.id) || !feedback.id){
    //     res.send("id already exist or no id provided");
    // }else{
    //     feedbacks.push(feedback);
    //     await db_addFeedback(feedback,()=>{},()=>{});
    //     res.send(feedback);
    // }
    await db_addFeedback(feedback,()=>{},()=>{});
    res.send(feedback);
    //3. Send res
}

export const deleteFeedback=async(req, res)=>{
    //1. Access req.body or req.params
    const {id}=req.params;
    //2. Interact with database
    await db_deleteFeedback(id, ()=>{},(e)=>{console.log(e)});
    
    //3. Send res
    res.send(`${id} deleted`)
}

export const editFeedback=async(req, res)=>{
    //1. Access req.body or req.params
    const {rating, text}=req.body;
    const {id}=req.params;
    //2. Interact with database

    let updateFeedback={};
    updateFeedback.id=id;
    if(rating){
        updateFeedback.rating=rating;
    }
    if(text){
        updateFeedback.text=text;
    }
    console.log(updateFeedback)
    await db_editFeedback(updateFeedback,()=>{},()=>{})
    //3. Send res
    res.send(updateFeedback)
}