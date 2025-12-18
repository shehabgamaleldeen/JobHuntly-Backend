import ApiError from "../Utils/ApiError.utils.js"

const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      // Joi has a feature called "Strip Unknown". 
      // If a user sends extra fields that are NOT in your schema
      // Joi can automatically remove them.
      stripUnknown: true 
    });

    if (error) {
      const message = error.details
        .map((detail) => detail.message)
        .join(", ");

      throw new ApiError(400, message);
    }

    // Replace req.body with the validated/cleaned value
    req.body = value;
    next();
  };
};

export default validate;
