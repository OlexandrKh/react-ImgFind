import React from "react";
import Spinner from "react-spinners/ScaleLoader";

export default function Loader() {
  return (
    <div>
      <Spinner
        color="#39d312" //height={100} width={100}
      />
    </div>
  );
}
