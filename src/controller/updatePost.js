import prisma from "../config/prisma.js";
import schemaPost from "../schema/schema.js";

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const parseid = parseInt(id);
    if (isNaN(parseid)) {
      return res.status(400).json({
        success: false,
        message: "you must enter the number",
      });
    }
    const parse = schemaPost.safeParse(req.body);
    if (!parse.success) {
      const errorMassage = parse.error.issues.map(
        (err) => `${err.path} - ${err.message}`
      );
      return res.status(422).json({
        success: false,
        message: errorMassage,
        data: null,
      });
    }
    const findunique = await prisma.post.findUnique({
      where: {
        id: parseid,
      },
    });
    if (findunique === null) {
      return res.status(404).json({
        success: false,
        message: "id not found",
      });
    }
    const update = await prisma.post.update({
      where: {
        id: parseid,
      },
      data: {
        title: parse.data.title,
        content: parse.data.content,
        published: parse.data.published,
        author_name: parse.data.author_name,
      },
    });
    return res.status(200).json({
      success: true,
      message: "update data succes",
      data: update,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "update data failed",
    });
  }
};

export default updatePost;
