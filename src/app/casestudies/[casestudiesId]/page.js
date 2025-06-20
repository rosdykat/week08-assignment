import { db } from "@/app/utils/dbConnection";

export default async function CaseStudiesIdPage({ params }) {
  const idParams = await params.casestudiesId;

  //query our db
  const query = await db.query(`SELECT * FROM case_study WHERE id = $1`, [
    idParams,
  ]);

  const casestudyData = query.rows; //this is an array, each column is an object
  return (
    <>
      <h1>This is the Case Study page!</h1>
      {casestudyData.map((post) => (
        <div key={post.id}>
          <h2>{`title: ${post.title}`}</h2>
          <h2>{`post: ${post.post}`}</h2>
        </div>
      ))}
    </>
  );
}

// import pg from "pg";

// export default async function Post({ params }) {
//   const slug = await params;
//   const db = new pg.Pool({
//     connectionString: process.env.NEXT_POSTGRES,
//   });

//   const post = (await db.query(`SELECT * FROM posts WHERE id = ${slug.id};`))
//     .rows;
//   return (
//     <>
//       <h1>This is the Rollercoaster page!</h1>
//       {rollercoasterData.map((roller) => (
//         <div key={roller.id}>
//           <h2>{roller.name}</h2>
//           <h2>{roller.height}</h2>
//         </div>
//       ))}
//     </>
//   );
// }
