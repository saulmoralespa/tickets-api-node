import express from "express";
import { 
    register, 
    getTickets,
    getTicket, 
    editTicket, 
    deleteTicket 
} from "../controllers/ticketController.js";

const router = express.Router();

router.post("/", register);
router.get("/", getTickets);
router.get("/:id", getTicket);
router.patch("/:id", editTicket);
router.delete("/:id", deleteTicket);

export default router;