// models/JobApplication.js
import mongoose from "mongoose";
import { APPLICATION_STATUS } from "../../Constants/constants.js";

const AnswerSchema = new mongoose.Schema(
  {
    questionId: { type: mongoose.Schema.Types.ObjectId, required: true }, // refers to Job.questions._id
    answerText: String,
  },
  { _id: false }
);

const JobApplicationSchema = new mongoose.Schema(
  {
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    seekerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    appliedAt: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: Object.values(APPLICATION_STATUS),
      default: APPLICATION_STATUS.IN_REVIEW,
    },
    score: Number,

    // snapshot fields
    fullName: String,
    email: String,
    phone: String,
    currentJobTitle: String,
    linkedinUrl: String,
    portfolioUrl: String,
    additionalInfo: String,
    resumeUrl: String,

    // answers stored only here
    answers: { type: [AnswerSchema], default: [] },
  },
  { timestamps: true }
);

const JobApplicationModel =
  mongoose.models.JobApplication || mongoose.model("JobApplication", JobApplicationSchema);
export default JobApplicationModel;
