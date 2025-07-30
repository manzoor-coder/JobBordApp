import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        company: {
            type: String,
            required: true,
            trim: true
        },
        location: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
        },
        postedAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true })


export const Job = mongoose.model("Job", jobSchema);