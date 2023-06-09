import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center" style={{ background: "#fa320a" }}>
      <div className="w-64">
        <img
          style={{ height: "50px" }}
          alt="Rotten Tomatoes"
          src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg" />
      </div>
      <div className="w-64">
        <input className="w-full rounded-md border pt-2 border-black "
          placeholder="Search ..." />
      </div>
      <div className="w-96 pl-4 items-center">
        <nav>
          <ul className="list-none flex justify-between p-3 text-white">
            <li>
              <Link href={"/movie"}>MOVIES</Link>
            </li>
            <li>TV SHOWS</li>
            <li>MOVIE TRIVIA</li>
            <li>NEWS</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};