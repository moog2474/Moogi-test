// import { Cover } from "@/component/Cover";
import Movie from "@/components/Movie";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/Pagination";


export default function Home(): JSX.Element {

  return (
      <>
        <Movie/>
      </>
  );
}


// export async function getServerSideProps() {
//   const res = await axios.post("http://localhost:9000/api/movie", {
//     pageSize: 1,
//     searching: ''
//   });

//   return {
//     props: {
//       message: "Welcome to Server Side Props",
//       result: res.data.result
//     }
//   }
