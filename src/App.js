import React, { lazy, Suspense } from "react";
import { CssBaseline, LinearProgress } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <ErrorBoundary>
      <CssBaseline />
      <Suspense fallback={<LinearProgress />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
