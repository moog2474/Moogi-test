import React from "react";
import Image from "next/image";
import { IMovie } from "@/components/Movie";


interface myProps {
  item: IMovie;
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