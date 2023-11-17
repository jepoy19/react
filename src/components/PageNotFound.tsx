import React from "react";

import { useParams, Link } from "react-router-dom";

function PageNotFound() {
  const params = useParams();
  let message = `"${params.pageName}" page is private. Please Log in First`;
  return (
    <>
      <p>{message}</p>
      <Link to="/login">Login</Link>
    </>
  );
}
export default PageNotFound;
