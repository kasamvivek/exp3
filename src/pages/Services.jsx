import { Container, Row, Col } from "react-bootstrap";
import { Box, Typography, Card, CardContent } from "@mui/material";

function Services() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "60px",
        color: "white"
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          My Services
        </Typography>

        <Typography variant="h6" sx={{ opacity: 0.9 }} paragraph>
          I provide data-driven and intelligent solutions to help businesses 
          and individuals make smarter decisions.
        </Typography>

        <Row className="mt-4">
          <Col md={4}>
            <Card
              sx={{
                background: "#ff6a00",
                color: "white",
                minHeight: 250,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)"
                }
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  📊 Data Analysis & Visualization
                </Typography>
                <Typography variant="body2">
                  Perform exploratory data analysis and create meaningful 
                  dashboards using Python, Pandas, and visualization tools.
                </Typography>
              </CardContent>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              sx={{
                background: "#00c6ff",
                color: "white",
                minHeight: 250,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)"
                }
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  🤖 Machine Learning Development
                </Typography>
                <Typography variant="body2">
                  Build predictive models, classification systems, and AI-based 
                  solutions tailored to business requirements.
                </Typography>
              </CardContent>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              sx={{
                background: "#11998e",
                color: "white",
                minHeight: 250,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)"
                }
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  🌐 AI Web Integration
                </Typography>
                <Typography variant="body2">
                  Integrate machine learning models into modern React-based 
                  web applications for real-world deployment.
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}

export default Services;
