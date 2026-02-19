import { useContext, useState, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Analytics() {
  const { state, dispatch } = useContext(AppContext);
  const [input, setInput] = useState("");

  const isDark = state.theme === "dark";

  const totalTasks = useMemo(() => state.tasks.length, [state.tasks]);

  const completedTasks = useMemo(
    () => state.tasks.filter(task => task.completed).length,
    [state.tasks]
  );

  const pendingTasks = useMemo(
    () => state.tasks.filter(task => !task.completed).length,
    [state.tasks]
  );

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: input });
    setInput("");
  };

  return (
    <Container
      style={{
        marginTop: "80px",
        padding: "30px",
        backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
        color: isDark ? "#ffffff" : "#000000",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2 className="mb-4">Task Analytics Dashboard</h2>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="p-3 text-white" style={{ backgroundColor: "#3f51b5" }}>
            <h5>Total Tasks</h5>
            <h3>{totalTasks}</h3>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 text-white" style={{ backgroundColor: "#4caf50" }}>
            <h5>Completed</h5>
            <h3>{completedTasks}</h3>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 text-white" style={{ backgroundColor: "#ff9800" }}>
            <h5>Pending</h5>
            <h3>{pendingTasks}</h3>
          </Card>
        </Col>
      </Row>

      <Form className="mb-3 d-flex">
        <Form.Control
          type="text"
          placeholder="Enter new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button className="ms-2" onClick={handleAdd}>
          Add
        </Button>
      </Form>

      {state.tasks.map(task => (
        <Card
          key={task.id}
          className="mb-2 p-3 d-flex flex-row justify-content-between align-items-center"
          style={{
            backgroundColor: isDark ? "#2c2c2c" : "#f8f9fa",
            color: isDark ? "#ffffff" : "#000000"
          }}
        >
          <Form.Check
            type="checkbox"
            checked={task.completed}
            onChange={() =>
              dispatch({ type: "TOGGLE_TASK", payload: task.id })
            }
            label={
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none"
                }}
              >
                {task.text}
              </span>
            }
          />

          <Button
            variant="danger"
            size="sm"
            onClick={() =>
              dispatch({ type: "DELETE_TASK", payload: task.id })
            }
          >
            Delete
          </Button>
        </Card>
      ))}

      <Button
        variant="dark"
        className="mt-3"
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
      >
        Clear Completed Tasks
      </Button>
    </Container>
  );
}

export default Analytics;
