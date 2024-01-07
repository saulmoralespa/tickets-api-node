import Ticket from "../models/Ticket.js";

const register = async (req, res) => {
    
    try {
        const newTicket = new Ticket(req.body);
        const storageTicket = await newTicket.save();
        res.json(storageTicket);
    } catch (error) {
        console.log(error.message);
    }
}

const getTickets = async (req, res) => {

    try {
        const limit = req.query.limit || 10;
        const page = req.query.page || 1;
        const tickets = await Ticket.paginate({}, {limit, page})
        res.json(tickets);
    } catch (error) {
        console.log(error.message);
    }

}


const getTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await Ticket.findById(id);

        if(!ticket){
            return res.status(404).json({msg: 'Ticket no encontrado'});
        }

        res.json(ticket);
    } catch (error) {
        console.log(error.message);
    }
}

const editTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await Ticket.findById(id);

        if(!ticket){
            return res.status(404).json({msg: 'Ticket no encontrado'});
        }
        
        const storageTicket = await Ticket.findByIdAndUpdate(id, req.body, {new: true});
        res.json(storageTicket);
    } catch (error) {
        console.log(error.message);
    }
}

const deleteTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await Ticket.findById(id);

        if(!ticket){
            return res.status(404).json({msg: 'Ticket no encontrado'});
        }

        await ticket.deleteOne();
        res.json({msg: 'Ticket Eliminado'});
    } catch (error) {
        console.log(error.message);
    }

}

export {
    register,
    getTickets,
    getTicket,
    deleteTicket,
    editTicket
}