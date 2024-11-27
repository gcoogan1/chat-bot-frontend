import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          padding={2}
          fontWeight={600}
        >
          Not Found
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
