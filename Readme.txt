Feedback API 

url: https://sleepy-atoll-12273.herokuapp.com/
root: https://sleepy-atoll-12273.herokuapp.com/api/feedbacks

1.	GET    /feedbacks     find all feedbacks
2.	POST   /feedbacks     creates a feedback
3.	GET    /feedbacks/:id finds user details
4.	DELETE /feedbacks/:id delete a feedback
5.	PATCH  /feedbacks/:id updates a feedback


Usage Example
const url=https://sleepy-atoll-12273.herokuapp.com

1.	GET    /feedbacks     find all feedbacks
const fetchFeedbacks= async()=>{
    const response= await fetch(url+'/feedbacks')
    const data=response.json()
    //data value is list of feedback objects
}

2.	POST   /feedbacks     creates a feedback
const addFeedback=async(newFeedback)=>{
    const response = await fetch(url+'/feedbacks',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newFeedback)
    })
    const data= response.json()
    //data value is the returned feedback object
}

3.	GET    /feedbacks/:id finds user details
const fetchFeedback=async(id)=>{
    const response= await fetch(url+'/feedbacks/'+id)
    const data=response.json()
    //data value a feedback object
}

4.	DELETE /feedbacks/:id delete a feedback 
const deleteFeedback=async(id)=>{
    const response=await fetch(`${url}/feedback/${id}`,
    {
        method:'DELETE'
    })
    //data value void
}

5.	PATCH  /feedbacks/:id updates a feedback
const updateFeedback=async(id, updItem)=>{
    const response=await fetch(`${url}/feedback/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        }
        body:JSON.stringify(updItem)
    })
    const data=await response.json()
    //data is an object containing changed parameters and id
}