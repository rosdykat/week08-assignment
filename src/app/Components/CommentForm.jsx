import { revalidatePath } from "next/cache";
import { db } from "../utils/dbConnection";
import FormStyles from "@/app/Components/commentform.module.css";

export default function CommentForm(props) {
  const casestudiesId = props.location;

  async function handleSubmit(formData) {
    "use server";

    formData = {
      name: formData.get("name"),
      comment: formData.get("comment"),
    };

    db.query(
      `INSERT INTO comment_form (name, comment, location) VALUES ($1, $2, $3)`,
      [formData.name, formData.comment, casestudiesId]
    );

    // revalidate path here
  }

  return (
    <div className="commentForm m-10">
      <form action={handleSubmit}>
        <fieldset className="text-lg font-semibold mb-2">
          <legend>Leave a comment</legend>
          <div className="formContent">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" required placeholder="name" />
            <label htmlFor="comment">Comment:</label>
            <input type="text" name="comment" required placeholder="comment" />
          </div>
        </fieldset>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
