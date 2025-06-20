// imports
import { db } from "@/app/utils/dbConnection";
import data from "@/lib/data";
import Image from "next/image";

export default async function CaseStudiesIdPage({ params }) {
  // Getting the ID from the URL - awaitParams removes and error lol
  const awaitParams = await params;
  const idParams = await awaitParams.casestudiesId;

  //query our db --> selecting everything from the database that matches the ID of the URL
  const query = await db.query(`SELECT * FROM case_study WHERE id = $1`, [
    idParams,
  ]);

  //storing the query data as casestudyData
  const casestudyData = query.rows;

  // renders
  return (
    <>
      <h1>This is the Case Study page!</h1>
      {/* matching the casestudyData with my local data where the post id matches images local id */}
      {casestudyData.map((post) => {
        const localImage = data.find((img) => img.id === post.id);
        return (
          <div key={post.id}>
            {/* rendering relevant supabase data */}
            <h2>{`title: ${post.title}`}</h2>
            <h2>{`post: ${post.post}`}</h2>
            {/* rendering image */}
            <Image src={localImage?.src} alt="test" width={500} height={500} />
          </div>
        );
      })}
    </>
  );
}

// Store the images in the public folder
// Store images data in the lib folder

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
