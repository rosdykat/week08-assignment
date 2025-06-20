import { revalidatePath } from "next/cache";
import { db } from "../utils/dbConnection";
import FormStyles from "@/app/Components/commentform.module.css";

export default function CommentForm(props) {
  const casestudiesId = props.location;
  console.log(casestudiesId);

  async function handleSubmit(formData) {
    "use server";

      const name= formData.get("name")
      const comment= formData.get("comment")
      const location=  formData.get("location")

    db.query(
      `INSERT INTO comment_form (name, comment, location) VALUES ($1, $2, $3)`,
      [name, comment, location]
    );

    // revalidate path here
  revalidatePath(`/casestudies/${location}`);
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
            <input type="hidden" name="location" value={casestudiesId} />
          </div>
        </fieldset>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
