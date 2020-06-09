import React from "react";

export default function Button(props) {
   const { className, labelFilter } = props;

   return (
      <button className={className} onClick={props.onClick}>
         {labelFilter} {/*<i className="fas fa-sort-down" />*/}
      </button>
   );
}
