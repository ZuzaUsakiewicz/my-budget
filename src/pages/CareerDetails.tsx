import React from "react";
import { useLoaderData, useParams } from "react-router";

export default function CareerDetails() {
  const { id } = useParams();
  const career: any = useLoaderData();
  return (
    <div>
      <h2>{career.map((item: any) => item.name)}</h2>
    </div>
  );
}

export const careerDetailsLoader: ({
  params,
}: any) => Promise<Response> = async ({ params }) => {
  const { id } = params;
  const res = await fetch("https://api.punkapi.com/v2/beers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career");
  }
  return res;
};
