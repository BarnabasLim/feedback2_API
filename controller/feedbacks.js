let feedbacks=[
    {
        "id":"2992h929ce2",
        "rating":9,
        "text": "best book ever written"
    },
    {
        "id":"392h9232442",
        "rating":8,
        "text": "I know what it is"
    }
]


export const getFeedbacks=(req,res)=>{
    //1. Access req.body or req.params

    //2. Interact with database

    //3. Send res
    res.send(feedbacks);
};


export const getFeedback=(req, res)=>{
    //1. Access req.body or req.params
    const {id}=req.params;
    //2. Interact with database
    const feedback=feedbacks.filter((item)=>item.id===id);
    //3. Send res
    res.send(feedback);
}

export const addFeedback=(req, res)=>{
    //1. Access req.body or req.params
    const feedback=req.body;
    //2. Interact with database
    if(feedbacks.find((item)=>item.id==feedback.id) || !feedback.id){
        res.send("id already exist or no id provided");
    }else{
        feedbacks.push(feedback);
        res.send(feedback);
    }
    
    //3. Send res
}

export const deleteFeedback=(req, res)=>{
    //1. Access req.body or req.params
    const {id}=req.params;
    //2. Interact with database
    feedbacks=feedbacks.filter((item)=>item.id!==id);
    
    //3. Send res
    res.send(feedbacks)
}

export const editFeedback=(req, res)=>{
    //1. Access req.body or req.params
    const {rating, text}=req.body;
    const {id}=req.params;
    //2. Interact with database
    const feedback=feedbacks.find((item)=>item.id!==id);
    if(rating){
        feedback.rating=rating
    }
    if(text){
        feedback.text=text
    }
    
    //3. Send res
    res.send(feedbacks)
}