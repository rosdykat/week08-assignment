import { db } from "../utils/dbConnection";
import Image from "next/image";
import Link from "next/link";

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
            <Link href={`/casestudies/post/${post.id}`}>
              <p className="title text-blue-800 ">{post.title}</p>
            </Link>
            {/* <p>{post.post}</p> */}
            <Link href={`/casestudies/tags/${tag.tag}`}>
              <p className="border border-dashed border-black w-fit px-5">
                {tag.tag}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
