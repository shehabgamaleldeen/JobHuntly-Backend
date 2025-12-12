

// SYSTEM ROLES
export const SYSTEM_ROLE = {
    JOB_SEEKER : 'JOB_SEEKER',
    ADMIN : 'ADMIN',
}


// JOB STATUS
export const JOB_STATUS = {
  DRAFT: "DRAFT",
  LIVE: "LIVE",
  CLOSED: "CLOSED",
};


// JOB QUESTION TYPES
export const QUESTION_TYPE = {
  TEXT: "TEXT",
  YES_NO: "YES_NO"
};

// SKILL LEVEL 
export const SKILL_LEVEL = {
  BEGINNER: "BEGINNER",
  INTERMEDIATE: "INTERMEDIATE",
  ADVANCED: "ADVANCED",
  EXPERT: "EXPERT",
};


// APPLICATION STATUS
export const APPLICATION_STATUS = {
  IN_REVIEW: "IN_REVIEW",
  INTERVIEWING: "INTERVIEWING",
  OFFERED: "OFFERED",
  HIRED: "HIRED",
  UNSUITABLE: "UNSUITABLE",
  DECLINED: "DECLINED",
};

// EMPLOYMENT LEVEL (Optional Enum)
export const EMPLOYMENT_LEVEL = {
  INTERN: "INTERN",
  ENTRY: "ENTRY",
  MID: "MID",
  SENIOR: "SENIOR",
  LEAD: "LEAD",
  MANAGER: "MANAGER",
};


// COMPANY LINK TYPES (Optional Enum)
export const COMPANY_LINK_TYPE = {
  WEBSITE: "WEBSITE",
  LINKEDIN: "LINKEDIN",
  FACEBOOK: "FACEBOOK",
  TWITTER: "TWITTER",
  INSTAGRAM: "INSTAGRAM",
};

// for multer
export const ImageExtensions = ['image/jpg' , 'image/jpeg',  'image/png']
export const VideoExtensions = [ ' video/mp4' , 'video/avi' ,'Video/mov' ]
export const PDFExtension = [ 'application/pdf' ]
