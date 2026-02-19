import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "react-bootstrap";

function ThemeToggle() {
  const { state, dispatch } = useContext(AppContext);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <Button
      variant={state.theme === "light" ? "dark" : "light"}
      onClick={handleToggle}
    >
      {state.theme === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
}

export default ThemeToggle;
