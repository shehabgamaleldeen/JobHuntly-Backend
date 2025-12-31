import { asyncHandler } from "../../../Utils/asyncHandler.utils.js";
import UserModel from "../../../DB/Models/UserModel.js";
import CompanyModel from "../../../DB/Models/CompanyModel.js";
import ApiError from "../../../Utils/ApiError.utils.js";
import { SYSTEM_ROLE } from "../../../Constants/constants.js";

export const getUsers = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const [users, totalCount] = await Promise.all([
    UserModel.find({ role: SYSTEM_ROLE.JOB_SEEKER })
      .select("-password -refreshToken")
      .skip(skip)
      .limit(limit),
    UserModel.countDocuments({ role: SYSTEM_ROLE.JOB_SEEKER }),
  ]);

  res.status(200).json({
    success: true,
    data: users,
    pagination: {
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      limit,
    },
  });
});

export const getCompanies = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const [companies, totalCount] = await Promise.all([
    CompanyModel.find()
      .populate({
        path: "userId",
        select: "email fullName phone avatarUrl isActive",
      })
      .skip(skip)
      .limit(limit),
    CompanyModel.countDocuments(),
  ]);

  res.status(200).json({
    success: true,
    data: companies,
    pagination: {
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      limit,
    },
  });
});
