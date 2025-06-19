import { db } from "../utils/dbConnection";
import Image from "next/image";

export default async function CaseStudiesPage() {
  const post = (await db.query(`SELECT * FROM case_study`)).rows;
  const tags = (await db.query(`SELECT * FROM case_study_tag`)).rows;

  return (
    <div className="postsBox">
      <h1>This is the case studies page</h1>
      {post.map((post) => {
        // Finding the tag in case_study_tags that matches the tag_id in case_study
        const tag = tags.find((tag) => tag.id === post.tag_id);
        return (
          <div className="posts" key={post.id}>
            <p>{post.title}</p>
            <p>{post.post}</p>
            <p>{tag.tag}</p>
          </div>
        );
      })}
    </div>
  );
}
