import mongoose from "mongoose";
import paginate from 'mongoose-paginate-v2';

const ticketSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            default: "abierto",
            enum: ["abierto", "cerrado"]
        }
    },
    {
        timestamps: true
    }
);

ticketSchema.plugin(paginate);

const Ticket = mongoose.model("ticket", ticketSchema);
export default Ticket;