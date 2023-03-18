import React from "react";
import { Link, useLoaderData } from "react-router-dom";

type Item = {
  id: number;
  name: string;
};

export default function Careers() {
  const careers: any = useLoaderData();
  return (
    <div>
      {careers.map((item: Item) => (
        <Link to={item.id.toString()} key={item.id}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export const careersLoader = async () => {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  return res;
};
