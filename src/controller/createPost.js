import prisma from "../config/prisma.js";
import schemaPost from "../schema/schema.js";

export const createpost = async (req, res) => {
  try {
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
    const post = await prisma.post.create({
      data: {
        title: parse.data.title,
        content: parse.data.content,
        published: parse.data.published,
        author_name: parse.data.author_name,
      },
    });
    return res.status(201).json({
      success: true,
      massage: "post data create success",
      data: post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      massage: "data format invalid",
    });
  }
};

export default createpost;
