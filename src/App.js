import React, { lazy, Suspense } from "react";
import { CssBaseline, LinearProgress } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const Dashboard = lazy(() => import("./pages/Dashboard"));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<LinearProgress />}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
