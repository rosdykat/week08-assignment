// TODO: Implement an update action in our app
// - update ONE specific entry
// - server function to trigger the update
// - form as UI
// - pre-fill the form
//      - select the current data in the table for this entry
//      - add these current values to the form inputs

import { db } from "@/app/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function UpdatePost({ params }) {
  const postId = await params.casestudiesId;

  // select the current data to pre-fill form
  const selectQuery = await db.query(`SELECT * FROM case_study WHERE id = $1`, [
    postId,
  ]);

  const data = selectQuery.rows[0]; // we only have one item in this array so we can use the index to access it.

  async function handleUpdate(formData) {
    "use server";
    const formValues = {
      title: formData.get("name"),
      post: formData.get("post"),
      tag_id: formData.get("tag_id"),
    };

    // add form db query
    db.query(
      `UPDATE case_study SET title = $1, post = $2, tag_id = $3 WHERE id =$4`,
      [formValues.title, formValues.post, formValues.tag_id, postId]
    );
    // revalidate paths - only revalidates a specific path
    revalidatePath(`/casestudies/post`);
    revalidatePath(`/casestudies/post/${postId}`);
    redirect(`/casestudies/post/${postId}`);
  }
  return (
    <>
      <h1>This is the update page</h1>
      <form action={handleUpdate}>
        <fieldset>
          <legend>Update post</legend>
          <label htmlFor="name">Post title</label>
          <input
            type="text"
            name="name"
            className="bg-gray-200"
            defaultValue={data.title}
            required
          />
          <label htmlFor="post">Content</label>
          <input
            type="text"
            name="post"
            className="bg-gray-200"
            defaultValue={data.post}
            required
          />
          {/* <label htmlFor="tag_id">Tag ID</label> */}
          <input
            type="text"
            name="tag_id"
            defaultValue={data.tag_id}
            required
            hidden
            className="bg-gray-200"
          />
        </fieldset>
        <button type="submit">Update</button>
      </form>
      {/* add form */}
    </>
  );
}
