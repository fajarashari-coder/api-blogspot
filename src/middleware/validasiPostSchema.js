import schemaPost from "../schema/schema.js";
function validasiPostSchema(req, res, next) {
  const parse = schemaPost.safeParse(req.body);
  if (!parse.success) {
    const errormessages = parse.error.issues.map(
      (err) => `${err.path} - ${err.message}`
    );
    return res.status(422).json({
      success: false,
      message: errormessages,
      data: null,
    });
  }
  req.body = parse.data;
  next();
}

export default validasiPostSchema;
