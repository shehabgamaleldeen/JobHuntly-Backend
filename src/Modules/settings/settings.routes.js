import { Router } from "express";
import * as SettingsController from "./controllers/Settings.controller.js"
import { AuthenticationMiddleware, AuthorizationMiddleware } from "../../Middlewares/AuthenticationMiddleware.js";
import { PDFExtension, SYSTEM_ROLE } from "../../Constants/constants.js";
import { MulterLocalMiddleware } from './../../Middlewares/MulterMiddleware.js';

const SettingsRouter = Router();

/* ================= AUTH ================= */
SettingsRouter.use( AuthenticationMiddleware() )
SettingsRouter.use( AuthorizationMiddleware([SYSTEM_ROLE.JOB_SEEKER,SYSTEM_ROLE.COMPANY,SYSTEM_ROLE.ADMIN]));

// ==========================  applicants 
/* ================= PROFILE ================= */
SettingsRouter.put("/updateProfile", SettingsController.updateProfile);















// ===================================== applicants and Recruiter 

/* ================= PROFILE ================= */

SettingsRouter.get(
  "/getProfile",
  SettingsController.getProfile
);


/* ================= EMAIL ================= */
SettingsRouter.put(
  "/change-email",
  SettingsController.changeEmail
);

/* ================= PASSWORD ================= */
SettingsRouter.put(
  "/reset-password",
  SettingsController.resetPassword
);

/* ================= DELETE ACCOUNT ================= */
SettingsRouter.delete(
  "/delete-account",
  SettingsController.deleteAccount
);

// skills /and /rusme /aveter_url /bg
export default SettingsRouter;


/*
========================================== Applicant =============================


💼 Experiences
POST   http://localhost:3000/users/me/experiences
DELETE http://localhost:3000/experiences/:id

🎓 Educations
POST   http://localhost:3000/users/me/educations
DELETE http://localhost:3000/educations/:id

🧠 Skills
DELETE http://localhost:3000/users/me/skills/:id


====================================================

POST   http://localhost:3000/users/me/avatar

📝 background image
PUT    http://localhost:3000/users/me/BG-image




👤 My Profile (الصفحة العامة)
PUT    http://localhost:3000/users/me/profile 🫸
GET    http://localhost:3000/users/me/profile 🫸


⚙️ Settings → Login Details
تغيير الإيميل
PUT    http://localhost:3000/settings/change-email 🫸

تغيير الباسورد
PUT    http://localhost:3000/settings/reset-password 🫸

❌ Delete account
DELETE http://localhost:3000/settings/delete-account 🫸


*/