import { useState } from "react";

// mui
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import InputBase from "@mui/material/InputBase";

// components
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/index";
import SiderBarMenu from "./scenes/global/SidebarMenu";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Area from "./scenes/area";
import Geography from "./scenes/geography";

// react Router
import { Route, Routes } from "react-router";

// contexts
import {
  isCollapsedSidebar,
  isToggledSidebar,
} from "./contexts/isCollapsedSidebar";

function App() {
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

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
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/geo" element={<Geography />} />
                  </Routes>
                </Box>
              </main>
            </div>
          </isToggledSidebar.Provider>
        </isCollapsedSidebar.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
