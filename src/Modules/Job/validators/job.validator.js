const Joi = require('joi');
// Ensure QUESTION_TYPE is imported if used in the schema
const {
    jobEmploymentTypeValues,
    jobCategoryValues,
    jobBenefits,
    QUESTION_TYPE
} = require('../../../Constants/constants');

const createJobSchema = Joi.object({
    companyId: Joi.string().hex().length(24).required(),

    title: Joi.string().min(10).max(100).required().messages({
        'string.min': 'Title must be at least 10 characters long.',
        'string.max': 'Title must be at most 100 characters long.',
    }),

    employmentTypes: Joi.array()
        .items(Joi.string().valid(...jobEmploymentTypeValues).required())
        .min(1)
        .required(),

    salaryMin: Joi.number().positive().required(),
    salaryMax: Joi.number().positive().min(Joi.ref('salaryMin')).required().messages({
        'number.min': 'Maximum salary must be greater than or equal to Minimum salary.', // Fixed logic text
    }),

    salaryCurrency: Joi.string().uppercase().length(3).required(),

    postDate: Joi.date().default(() => new Date()),

    dueDate: Joi.date()
        .greater(Joi.ref('postDate'))
        .message('Due date must be after the post date')
        .required(),

    isLive: Joi.boolean().default(true),

    description: Joi.string().min(100).max(1000).required().messages({
        'string.min': 'Description must be at least 100 characters long.', // Changed 'Title' to 'Description'
        'string.max': 'Description must be at most 1000 characters long.',
    }),

    // Helper for repetitive array strings
    responsibilities: Joi.array()
        .items(Joi.string().min(10).max(500).messages({
            'string.min': 'Item must be at least 10 characters long.',
            'string.max': 'Item must be at most 500 characters long.',
        }))
        .min(1).required(),

    whoYouAre: Joi.array()
        .items(Joi.string().min(10).max(500).messages({
            'string.min': 'Item must be at least 10 characters long.',
            'string.max': 'Item must be at most 500 characters long.',
        }))
        .min(1).required(),

    niceToHaves: Joi.array()
        .items(Joi.string().min(10).max(500).messages({
            'string.min': 'Item must be at least 10 characters long.',
            'string.max': 'Item must be at most 500 characters long.',
        }))
        .min(1).required(),

    categories: Joi.array()
        .items(Joi.string().valid(...jobCategoryValues).required())
        .min(1).required(),

    skillsIds: Joi.array()
        .items(Joi.string().hex().length(24))
        .min(1).required(),

    questions: Joi.array()
        .items(
            Joi.object({
                questionText: Joi.string().min(10).max(300).required().messages({
                    'string.min': 'Question must be at least 10 characters long.',
                    'string.max': 'Question must be at most 300 characters long.',
                }),
                type: Joi.string()
                    .valid(...Object.values(QUESTION_TYPE))
                    .default(QUESTION_TYPE.TEXT)
            })
        )
        .optional().default([]),

    benefits: Joi.array()
        .items(
            Joi.object({
                id: Joi.number().required(),
                icon: Joi.string().required(),
                title: Joi.string().required(),
                description: Joi.string().required()
            })
        ).optional().default([])
});

module.exports = { createJobSchema };