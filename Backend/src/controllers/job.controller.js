import { Job } from '../models/job.model.js'

const getJobs = async (req, res) => {
    const jobs = await Job.find().sort({postedAt: -1});
    res.json(jobs)
}

const createJob = async (req, res) => {
    try {
        const { title, company, location, description } = req.body;
        const job = new Job({ title, company, location, description })
        await job.save();
        res.status(201).json({message: "Job is create successfully.", job})
    } catch (error) {
        res.status(500).json({message: "Server error job is not created"})
    }
}

export {getJobs, createJob}