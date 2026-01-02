import prisma from "../config/prisma.js";

const deletePost = async (req, res) => {
  try {
    const idQuerry = await prisma.post.findUnique({
      where: {
        id: parseid,
      },
    });
    if (idQuerry === null) {
      return res.status(404).json({
        success: false,
        message: "id not found",
      });
    }
    const data = await prisma.post.delete({
      where: {
        id: parseid,
      },
    });
    return res.status(200).json({
      success: true,
      message: "delete post success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      massage: "data format invalid",
    });
  }
};
export default deletePost;
