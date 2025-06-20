// imports
import { db } from "@/app/utils/dbConnection";
import Link from "next/link";

export default async function TagsPage({ params }) {
  // Getting the ID from the URL
  // The browser encodes spaces as %20 so this returns it back to its original
  //! awaiting the params first prevents an error. this confuses me alot
  const resolvedParams = await params;
  const tagParams = await decodeURIComponent(resolvedParams.tags);

  //query our db --> selecting everything from the database that matches the ID of the URL
  const query = await db.query(`SELECT * FROM case_study_tag WHERE tag = $1`, [
    tagParams,
  ]);
  // const post = await db.query(`SELECT * FROM case_study`);

  const tag = query.rows[0];

  const post = await db.query(`SELECT * FROM case_study WHERE tag_id = $1`, [
    tag.id,
  ]);

  const posts = post.rows;

  return (
    <>
      <h2>Posts tagged: {tag.tag}</h2>
      {posts.length === 0 && <p>No posts found for this tag.</p>}
      {posts.map((post) => (
        <div className="caseStudyBox" key={post.id}>
          <Link href={`/casestudies/post/${post.id}`}>
            <p className= "hover:[background-color:#bae8e8]">{post.title}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
