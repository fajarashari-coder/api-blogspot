import prisma from "../config/prisma.js";

export const getPostController = async (req, res) => {
  try {
    const getPost = await prisma.post.findMany();
    return res.status(200).json({
      Success: true,
      message: "get all post success",
      data: getPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "get all atatus failed",
    });
  }
};
