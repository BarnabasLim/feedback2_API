import express from "express";
import {getFeedbacks,getFeedback, addFeedback,deleteFeedback,editFeedback} from "../controller/feedbacks.js"

const router =express.Router();

//get feedbacks route
router.get('/',getFeedbacks);

//get feedback route
router.get('/:id',getFeedback);

//add feedback route
router.post('/',addFeedback);

//delete feedback route
router.delete('/:id',deleteFeedback);

//edit feedback route
router.patch('/:id',editFeedback);

export default router;