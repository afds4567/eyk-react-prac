import Button from "./components/common/Button";
import { theme } from "./themes";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>Init Page</div>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </ThemeProvider>
    </>
  );
};
export default App;
