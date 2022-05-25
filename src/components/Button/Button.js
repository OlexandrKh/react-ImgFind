import React from "react";

export default function Button({ loadMore }) {
  return (
    <div className="ButtonBox">
      <button className="Button" onClick={loadMore}>
        Load more...
      </button>
    </div>
  );
}
