import * as z from "zod";

const schemaPost = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
  author_name: z.string(),
});

export default schemaPost;
