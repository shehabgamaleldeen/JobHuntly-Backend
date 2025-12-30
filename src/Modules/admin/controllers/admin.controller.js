import { asyncHandler } from "../../../Utils/asyncHandler.utils.js";
import UserModel from "../../../DB/Models/UserModel.js";
import CompanyModel from "../../../DB/Models/CompanyModel.js";
import ApiError from "../../../Utils/ApiError.utils.js";
import { SYSTEM_ROLE } from "../../../Constants/constants.js";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await UserModel.find({ role: SYSTEM_ROLE.JOB_SEEKER }).select("-password -refreshToken");
  
  res.status(200).json({
    success: true,
    data: users,
  });
});

export const getCompanies = asyncHandler(async (req, res) => {
  const companies = await CompanyModel.find().populate({
    path: "userId",
    select: "email fullName phone avatarUrl isActive",
  });

  res.status(200).json({
    success: true,
    data: companies,
  });
});
