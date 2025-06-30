import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return null;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba( 0 ,0 ,0 , 0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item size={{ xs: 12 }} m={2}>
        <Typography component={"p"} variant="h6" color="primary">
          کامنت ها{" "}
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            item
            size={{ xs: 11 }}
            key={comment.id}
            m={2}
            p={2}
            border={"1px silver solid"}
            borderRadius={1}
          >
            <Box
              component={"div"}
              display={"flex"}
              alignItems={"center"}
              mb={3}
            >
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component={"span"} variant="p" mr={1}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component={"p"} variant="p" color="secondary">
              {" "}
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );

  return <div>Comments</div>;
}

export default Comments;
