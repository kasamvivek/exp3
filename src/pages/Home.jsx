import { Container, Button } from "react-bootstrap";
import { Typography, Box, Chip, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #1976d2, #42a5f5)",
        display: "flex",
        alignItems: "center",
        color: "white"
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Kasam Vivek Reddy
        </Typography>

        <Typography variant="h5" gutterBottom>
          Aspiring Data Scientist
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: "600px", mb: 3 }}>
          Passionate about Artificial Intelligence, Machine Learning,
          and building intelligent data-driven applications.
          I love solving real-world problems using data.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Chip label="Machine Learning" color="primary" />
          <Chip label="Data Science" color="secondary" />
          <Chip label="React Developer" color="success" />
        </Stack>

        <Button variant="light">
          View My Work <ArrowForwardIcon />
        </Button>
      </Container>
    </Box>
  );
}

export default Home;
