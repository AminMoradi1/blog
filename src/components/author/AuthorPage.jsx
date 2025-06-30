import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import sanitizeHtml from "sanitize-html";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();

  const { data, loading, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h4>error...</h4>;
  const { author } = data;
  console.log(author);

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          size={{ xs: 12 }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {author.name}
          </Typography>
          <Typography component="p" variant="h5" color="textSecondary" mt={2}>
            {author.field}
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12 }} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item size={{ xs: 12 }} mt={6}></Grid>
        <Typography component="h3" variant="h4">
          مقالات {author.name}
        </Typography>
        <Grid container spacing={2} mt={2}>
          {author.post.map((post) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
              <CardEL
                title={post.title}
                slug={post.slug}
                coverPhoto={post.coverPhoto}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
