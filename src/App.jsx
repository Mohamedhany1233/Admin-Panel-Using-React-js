import React, { useState, Suspense } from "react";

// mui
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Loading from "./components/Loading";

// react Router
import { Route, Routes, useLocation } from "react-router";

// theme & dark_light  Mode
import { ColorModeContext, useMode } from "./theme";

// pages
const Topbar = React.lazy(() => import("./scenes/global/Topbar"));
const Dashboard = React.lazy(() => import("./scenes/dashboard/index"));
const SiderBarMenu = React.lazy(() => import("./scenes/global/SidebarMenu"));
const Team = React.lazy(() => import("./scenes/team"));
const Contacts = React.lazy(() => import("./scenes/contacts"));
const Invoices = React.lazy(() => import("./scenes/invoices"));
const Form = React.lazy(() => import("./scenes/form"));
const Calendar = React.lazy(() => import("./scenes/calendar"));
const FAQ = React.lazy(() => import("./scenes/faq"));
const Bar = React.lazy(() => import("./scenes/bar"));
const Pie = React.lazy(() => import("./scenes/pie"));
const Area = React.lazy(() => import("./scenes/area"));
const Geography = React.lazy(() => import("./scenes/geography"));

// contexts
import {
  isCollapsedSidebar,
  isToggledSidebar,
} from "./contexts/isCollapsedSidebar";

function App() {
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const location = useLocation();

  return (
    // change mode color context
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <isCollapsedSidebar.Provider
          value={{
            isCollapsed,
            setIsCollapsed,
          }}
        >
          <isToggledSidebar.Provider value={{ isToggled, setIsToggled }}>
            <Suspense fallback={<Loading page_name="Loading Content" />}>
              <div className="app">
                {/* Sidebar Menu on the left*/}
                <SiderBarMenu />
                {/* Main Content on the right*/}
                <main className="content" style={{ overflowY: "scroll" }}>
                  <Topbar />
                  <Box
                    sx={{
                      "@media (max-width:750px)": {
                        mt: "100px",
                      },
                      "@media (max-width:565px)": {
                        mt: "160px",
                      },
                    }}
                  >
                    <Routes key={location.pathname}>
                      <Route
                        path="/"
                        element={
                          <Suspense
                            fallback={
                              <Loading page_name="Loading Dashboard Page" />
                            }
                          >
                            <Dashboard />
                          </Suspense>
                        }
                      />
                      <Route
                        path="/team"
                        element={
                          <Suspense
                            fallback={<Loading page_name="Loading Team Page" />}
                          >
                            <Team />
                          </Suspense>
                        }
                      />
                      <Route
                        path="/contacts"
                        element={
                          <Suspense
                            fallback={
                              <Loading page_name="Loading Contacts Information Page" />
                            }
                          >
                            <Contacts />
                          </Suspense>
                        }
                      />
                      <Route
                        path="/invoices"
                        element={
                          <Suspense
                            fallback={
                              <Loading page_name="Loading Invoices Balances Page" />
                            }
                          >
                            <Invoices />
                          </Suspense>
                        }
                      />
                      <Route
                        path="/form"
                        element={
                          <Suspense
                            fallback={
                              <Loading page_name="Loading Profile Form Page" />
                            }
                          >
                            <Form />
                          </Suspense>
                        }
                      />
                      <Route
                        path="/calendar"
                        element={
                          <Suspense
                            fallback={
                              <Loading page_name="Loading Calendar Page" />
                            }
                          >
                            <Calendar />
                          </Suspense>
                        }
                      />
                      <Route
                        path="/faq"
                        element={
                          <Suspense
                            fallback={<Loading page_name="Loading FAQ Page" />}
                          >
                            <FAQ />
                          </Suspense>
                        }
                      />
                      <Route
                        path="/bar"
                        element={
                          <Suspense
                            fallback={
                              <Loading page_name="Loading Bar Chart Page" />
                            }
                          >
                            <Bar />
                          </Suspense>
                        }
                      />
                      <Route
                        path="/pie"
                        element={
                          <Suspense
                            fallback={
                              <Loading page_name="Loading Pie Chart Page" />
                            }
                          >
                            <Pie />
                          </Suspense>
                        }
                      />
                      <Route
                        path="/area"
                        element={
                          <Suspense
                            fallback={
                              <Loading page_name="Loading Area Chart Page" />
                            }
                          >
                            <Area />
                          </Suspense>
                        }
                      />
                      <Route
                        path="/geo"
                        element={
                          <Suspense
                            fallback={
                              <Loading page_name="Loading Geography Chart Page" />
                            }
                          >
                            <Geography />
                          </Suspense>
                        }
                      />
                    </Routes>
                  </Box>
                </main>
              </div>
            </Suspense>
          </isToggledSidebar.Provider>
        </isCollapsedSidebar.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
