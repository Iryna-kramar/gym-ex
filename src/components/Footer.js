import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box mt="55px">
      <Stack alignItems="center">
        <Button
          alignItems="center"
          sx={{
            color: "#fff",
            background: "linear-gradient(#1b9ee5 50%, #f4dc00 50%)",
            fontSize: "14px",
            borderRadius: "5px",
            width: "155px",
            height: "50px",
            textAlign: "center",
          }}
          variant="outlined"
          href="https://www.comebackalive.in.ua/donate"
        >
          Support Ukraine
        </Button>
      </Stack>
    </Box>
  );
};

export default Footer;
