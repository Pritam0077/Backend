/* using try catch
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
 };
 */ // using Promises
const asyncHandler = (resolveHandler) => {
  (req, res, next) => {
    Promise.resolve(resolveHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
