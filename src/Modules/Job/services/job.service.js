import JobModel from "../../../DB/Models/JobModel.js";
import ApiError from "../../../Utils/ApiError.utils.js"

const createJob = async (jobData) => {
    const {
        companyId,
        title,
        employmentTypes,
        salaryMin,
        salaryMax,
        salaryCurrency,
        postDate,
        dueDate,
        isLive,
        description,
        responsibilities,
        whoYouAre,
        niceToHaves,
        categories,
        skillsIds,
        questions,
        benefits
    } = jobData

    const existingJob = await JobModel.findOne({ title });

    if (existingJob) {
        throw new ApiError(400,"Job Title already exits")
    }

    const job = await JobModel.create({
        companyId,
        title,
        employmentTypes,
        salaryMin,
        salaryMax,
        salaryCurrency,
        postDate,
        dueDate,
        isLive,
        description,
        responsibilities,
        whoYouAre,
        niceToHaves,
        categories,
        skillsIds,
        questions,
        benefits
    })

    if(!job){
        throw new ApiError(401,"Job creation failed")
    }

    return job
}