import React from "react";
import { useRouteError } from "react-router-dom";

export default function CareerError() {
  const error: any = useRouteError();
  return (
    <div>
      CareerError
      <p>{error.message}</p>
    </div>
  );
}
