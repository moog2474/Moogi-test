import React from "react";
import Image from "next/image";
import { IMovie } from "@/components/IMovie";
import axios from "axios";
import { MovieCard } from "@/components/MovieCard";


interface myProps {
  item: Array<IMovie>;
  key?: number
}

const index = ({ item }: myProps): JSX.Element => {
  return (
    <div>
      Movie Detials Pages
      
    </div>
  );
};
export default index;