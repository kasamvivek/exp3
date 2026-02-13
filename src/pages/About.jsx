import { Container, Row, Col } from "react-bootstrap";
import {
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
  Stack
} from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "60px"
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          About Me
        </Typography>

        <Typography variant="h6" sx={{ opacity: 0.9 }} paragraph>
          I am an aspiring Data Scientist passionate about Artificial
          Intelligence and Machine Learning. I specialize in transforming raw
          data into meaningful insights and building intelligent systems that
          solve real-world problems.
        </Typography>

        <Typography variant="body1" sx={{ opacity: 0.8 }} paragraph>
          My mission is to help businesses make data-driven decisions using
          predictive analytics, machine learning models, and interactive web
          applications.
        </Typography>

        <Box mt={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            What I Provide
          </Typography>

          <Row className="mt-4">
            <Col md={4}>
              <Card
                sx={{
                  background: "#1e3c72",
                  color: "white",
                  minHeight: 220,
                  boxShadow: 5
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    📊 Data Analysis
                  </Typography>
                  <Typography variant="body2">
                    Extract meaningful insights from complex datasets using
                    Python, Pandas and visualization tools.
                  </Typography>
                </CardContent>
              </Card>
            </Col>

            <Col md={4}>
              <Card
                sx={{
                  background: "#6a11cb",
                  color: "white",
                  minHeight: 220,
                  boxShadow: 5
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    🤖 Machine Learning Solutions
                  </Typography>
                  <Typography variant="body2">
                    Develop predictive models and intelligent systems to solve
                    business and real-world challenges.
                  </Typography>
                </CardContent>
              </Card>
            </Col>

            <Col md={4}>
              <Card
                sx={{
                  background: "#11998e",
                  color: "white",
                  minHeight: 220,
                  boxShadow: 5
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    🌐 Web + AI Integration
                  </Typography>
                  <Typography variant="body2">
                    Build modern web applications using React and integrate AI
                    models into practical systems.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Box>

        <Box mt={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Core Skills
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Python" sx={{ bgcolor: "#ff9800", color: "white" }} />
            <Chip label="Machine Learning" sx={{ bgcolor: "#e91e63", color: "white" }} />
            <Chip label="Data Science" sx={{ bgcolor: "#4caf50", color: "white" }} />
            <Chip label="React JS" sx={{ bgcolor: "#03a9f4", color: "white" }} />
            <Chip label="SQL" sx={{ bgcolor: "#9c27b0", color: "white" }} />
            <Chip label="Deep Learning" sx={{ bgcolor: "#f44336", color: "white" }} />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
