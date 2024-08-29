import "./App.css";
import NavBar from "./components/navbar/NavBar";
import MuiThemeProvider from "@mui/material/styles/MuiThemeProvider";
import Search from "./components/search/Search";

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
