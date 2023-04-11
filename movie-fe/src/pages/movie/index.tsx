
import Movie from "@/components/Movie";
import { IMovie } from "@/components/IMovie";
import axios from "axios";
import { MovieCard } from "@/components/MovieCard";
import { GetServerSideProps } from "next";
import { Pagination } from "@/components/Pagination";
import React from "react";
import { Filter } from "@/components/Filter";

interface movieProps {
  movies: Array<IMovie>;
  rowCount: number;
  pageSize: number;
}

const index = ({
  movies,
  rowCount,
  pageSize
}: movieProps): JSX.Element => {
  return (
    <>
      <Filter/>
      <div className="grid grid-cols-4 gap-4">
        {movies?.map((item: IMovie, index: number)=>{
          return <MovieCard item={item} key={index}/>
        })}
      </div>
      <div className="flex">
        <Pagination rowCount={rowCount} pageSize={pageSize}/>
      </div>
    </>
  );
};

export default index;


export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  const pageSize = ctx.query ? ctx.query.pageSize ? ctx.query.pageSize: 1 : 1;

  const res = await axios.post(`http://localhost:8080/api/movie`,{
    pageSize: pageSize,
    limit: 30,
  })
  const {result, rowCount} = res.data;
  return {
    props: {movies: result, rowCount, pageSize}
  }
 }