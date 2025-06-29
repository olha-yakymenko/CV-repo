import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import AdminPanel from "./pages/AdminPanel";
import PrivateRoute from "./helpers/PrivateRoute";
import AdminRoute from "./helpers/AdminRoute";
import UserPanel from "./pages/UserPanel";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak} >
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route
              path="/secured"
              element={
                <PrivateRoute>
                  <UserPanel />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminPanel />
                </AdminRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
