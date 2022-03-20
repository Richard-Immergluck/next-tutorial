import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(), // During development this is a quick and easy way to ensure that each object will have a unique id
      text: comment,
    }
    comments.push(newComment)
    res.status(201).json(newComment)
  }
}
