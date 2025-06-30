import { AppBar, Toolbar, Typography , Container } from "@mui/material";
import React from "react";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

function Header() {
  return (
    <AppBar position="sticky">
        <Container  maxWidth="lg">

      <Toolbar>
        <Typography component={"h1"} variant="h5" fontWeight={"bold"} flex={1}>
          وبلاگ امین مرادی
        </Typography>
        <h1>میلاد</h1>
        <BookRoundedIcon />
      </Toolbar>
        </Container>
    </AppBar>
  );
}

export default Header;
