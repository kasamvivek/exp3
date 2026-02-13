import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Box, Typography, Card, CardContent } from "@mui/material";

function Contact() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "60px",
        color: "white"
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Contact Me
        </Typography>

        <Typography variant="h6" sx={{ opacity: 0.9 }} paragraph>
          Let’s connect and build intelligent solutions together.
        </Typography>

        <Row className="mt-4">
          {/* LEFT SIDE - CONTACT INFO */}
          <Col md={5}>
            <Card
              sx={{
                background: "#1e3c72",
                color: "white",
                padding: "20px",
                boxShadow: 5
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Kasam Vivek Reddy
                </Typography>

                <Typography paragraph>
                  🎓 B.Tech in Artificial Intelligence & Machine Learning
                </Typography>

                <Typography paragraph>
                  💼 Aspiring Data Scientist
                </Typography>

                <Typography paragraph>
                  📍 Telangana, India
                </Typography>

                <Typography paragraph>
                  📧 kasamvivek@example.com
                </Typography>

                <Typography>
                  📱 +91 9876543210
                </Typography>
              </CardContent>
            </Card>
          </Col>

          {/* RIGHT SIDE - CONTACT FORM */}
          <Col md={7}>
            <Card
              sx={{
                background: "#6a11cb",
                padding: "20px",
                boxShadow: 5
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Send a Message
                </Typography>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your message..."
                    />
                  </Form.Group>

                  <Button variant="light">Send Message</Button>
                </Form>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}

export default Contact;
