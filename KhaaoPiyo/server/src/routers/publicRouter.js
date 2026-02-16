import express from "express";
import { NewContact, getAllRestaurants } from "../controller/publicController.js"; 

const router = express.Router();

// Routes definition
router.post('/new-contact', NewContact);
router.get('/allRestaurants', getAllRestaurants); 

// SABSE ZAROORI: Ye line backend crash fix karegi
export default router;