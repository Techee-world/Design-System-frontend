import "./App.css";
import Typography from "./components/atom/typography/Typography";

function App() {
  return (
    <>
      <Typography
        text="welcome guys"
        tag="h1"
        style={{ fontSize: "30px" }}
        className="text-blue-600"
        role="role"
        ariaLabel="ariaLabel"
        ariaLabelledBy="ariaLabelledBy"
      />
      <Typography text="welcome guys" tag="h2">
        <span className="text-yellow-600">welcome</span>
      </Typography>
      <Typography text="welcome guys" tag="h3" />
    </>
  );
}

export default App;
