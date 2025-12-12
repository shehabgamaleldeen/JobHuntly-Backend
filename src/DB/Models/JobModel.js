// models/Job.js
import mongoose from "mongoose";
import { JOB_STATUS, QUESTION_TYPE } from "../../Constants/constants.js";

const JobSchema = new mongoose.Schema(
  {
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },

    title: { type: String, required: true },
    locationCity: String,
    locationCountry: String,
    isRemote: { type: Boolean, default: false },
    employmentLevel: String,

    salaryMin: Number,
    salaryMax: Number,
    salaryCurrency: String,
    capacity: Number,
    applyBeforeDate: Date,
    postedAt: { type: Date, default: Date.now },

    status: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.DRAFT,
    },

    description: String,
    responsibilities: String,
    whoYouAre: String,
    niceToHaves: String,

    // questions embedded — each question will automatically get its own _id
    questions: [
      {
        questionText: { type: String, required: true },
        type: {
          type: String,
          enum: Object.values(QUESTION_TYPE),
          default: QUESTION_TYPE.TEXT,
        },
        isRequired: { type: Boolean, default: false },
        sortOrder: { type: Number, default: 0 },
        options: { type: [String], default: [] },
      }
    ],
  },
  { timestamps: true }
);

const JobModel = mongoose.models.Job || mongoose.model("Job", JobSchema);
export default JobModel;
