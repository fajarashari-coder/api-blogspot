function validateIdParam(req, res, next) {
  const { id } = req.params;
  const parseid = parseInt(id);
  if (isNaN(parseid)) {
    return res.status(400).json({
      success: false,
      message: "you must enter the number",
    });
  }
  req.params.id = parseid;
  next();
}
export default validateIdParam;
