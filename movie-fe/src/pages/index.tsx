// import { Cover } from "@/component/Cover";
import Movie, { IMovie } from "@/components/Movie";
import axios from "axios";
import Link from "next/link";


export default function Home(props: { message: string, result: [IMovie] }) {
  const side = typeof window ? "client" : "server";

  return (
    <>
      <Link href='/List'>List</Link>
      <Movie movie={props.result} />
      <div>You're currently on the {side}-side</div>
    </>
  );
}


export async function getServerSideProps() {
  const res = await axios.post("http://localhost:9000/api/movie", {
    pageSize: 1,
    searching: 'Museum'
  });

  return {
    props: {
      message: "Welcome to Server Side Props",
      result: res.data.result
    }
  }
}