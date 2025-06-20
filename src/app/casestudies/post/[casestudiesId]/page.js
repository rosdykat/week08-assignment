// imports
import CommentForm from "@/app/Components/CommentForm";
import { db } from "@/app/utils/dbConnection";
import data from "@/lib/data";
import Image from "next/image";

export default async function CaseStudiesIdPage({ params }) {
  // Getting the ID from the URL - awaitParams removes and error lol

  const idParams = await params.casestudiesId;

  //query our db --> selecting everything from the database that matches the ID of the URL
  const query = await db.query(`SELECT * FROM case_study WHERE id = $1`, [
    idParams,
  ]);
  const caseStudyData = query.rows

    const comments = await db.query(`SELECT * FROM comment_form WHERE location=$1`,[idParams]);

  //storing the query data as casestudyData
  const commentData = comments.rows;

  // renders
  return (
    <>
      {/* matching the casestudyData with my local data where the post id matches images local id */}
      {caseStudyData.map((post) => {
        const localImage = data.find((img) => img.id === post.id);
        return (
          <div key={post.id} className="postAndComments">
            <div className="caseStudyBox m-4" key={post.id}>
              {/* rendering relevant supabase data */}
              <h1 className="text-3xl">{post.title}</h1>
              {/* rendering image */}
              <Image
                className="m-4"
                src={localImage.src}
                alt="test"
                width={300}
                height={300}
              />
              <h2 className="text-xl">{post.post}</h2>
            </div>
            <div className="commentBox">
                        {commentData.map((comment) => (
        <div className="comments p-3" key={comment.id}>
            <h1 className="font-bold">{comment.name}</h1>
            <p>{comment.comment}</p>
        </div>
      ))}
      </div>
            <CommentForm location={idParams}/>
          </div>
        );
      })}
    </>
    
  );
}
