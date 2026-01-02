import prisma from "../config/prisma.js";
import slugify from "slugify";

const createpost = async (req, res) => {
  try {
    const { title } = req.body;
    let slug = slugify(title, {
      replacement: "-",
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    });
    const unique = await prisma.post.findUnique({
      where: { slug: slug },
    });
    if (unique) {
      slug += "-" + Date.now();
    }
    const post = await prisma.post.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        published: req.body.published,
        author_name: req.body.author_name,
        slug: slug,
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
