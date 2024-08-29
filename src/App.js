import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Search from "./components/search/Search";

// Create a theme instance
const theme = createTheme({
  palette: {
    mode: "light", // or "dark" for a dark theme
    primary: {
      main: "#1976d2", // Change this to your primary color
    },
    secondary: {
      main: "#dc004e", // Change this to your secondary color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides baseline CSS for MUI components */}
      <div>
        <NavBar />
        <Search />
      </div>
    </ThemeProvider>
  );
}

export default App;
