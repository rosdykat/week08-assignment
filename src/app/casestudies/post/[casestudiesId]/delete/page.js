// TODO: Implement a delete action to our app
// - delete a specific rollercoaster
// - server function to trigger the delete
// - form as UI

import { db } from "@/app/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeletePage({ params }) {
  const caseStudyId = await params.casestudiesId;

  async function handleDelete() {
    "use server";
    // delete one entry in the table
    db.query(`DELETE FROM case_study WHERE id=$1`, [caseStudyId]);
    revalidatePath(`/casestudies`);
    redirect(`/casestudies`);
  }
  return (
    <>
      <h1>This is the delete page!!</h1>
      <form action={handleDelete}>
        <button type="submit" className="hover:bg-red-600">
          Delete Entry
        </button>
      </form>
    </>
  );
}
