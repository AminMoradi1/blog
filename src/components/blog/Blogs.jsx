import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log(data);

  if (loading) return <Loader />;
  if (error) return <h2>error...</h2>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
