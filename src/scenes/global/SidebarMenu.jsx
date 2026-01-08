import { useEffect, useState } from "react";

// react pro sidebar
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

// mui components
import { Box, Typography, useTheme } from "@mui/material";

// mui icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { tokens } from "../../theme";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// react router dom
import { Link } from "react-router";
import { useLocation } from "react-router";

// userImg
import userImg from "../../assets/user.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
      style={{ color: colors.gray[100] }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const location = useLocation().pathname;

  const routeMap = {
    "/": "Dashboard",
    "/team": "Manage Team",
    "/contacts": "Contacts Information",
    "/Invoices": "Invoices Balances",
    "/form": "Profile Form",
    "/calendar": "Calendar",
    "/faq": "FAQ Page",
    "/bar": "Bar Chart",
    "/pie": "Pie Chart",
    "/line": "Line Chart",
    "/geo": "Geography Chart",
  };

  useEffect(() => {
    setSelected(routeMap[location] || "");
  }, [location]);

  return (
    <Box>
      <Sidebar
        collapsed={isCollapsed}
        collapsedWidth="80px"
        rootStyles={{
          position: "relative",
          height: "100vh",
          width: "32vh",
          borderRight: "none",
          backgroundColor: "transparent",
          "& .ps-sidebar-container": {
            backgroundColor: colors.primary[400],
          },
          "& .ps-menuitem-root.ps-active > .ps-menu-button": {
            backgroundColor: "rgba(255,255,255,0.08)",
            color: "#4cceac",
            borderLeft: "4px solid #4cceac",
          },

          "& .ps-menuitem-root.ps-active .ps-menu-icon": {
            color: "#4cceac",
          },

          "& .ps-menuitem-root.ps-active .ps-menu-label": {
            fontWeight: "600",
          },
          "& .ps-menu-button:hover": {
            backgroundColor: "rgba(255,255,255,0.05) !important",
          },
        }}
      >
        <Menu>
          {/* LOGO & MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={<MenuOutlinedIcon sx={{ color: colors.gray[100] }} />}
            rootStyles={{
              "& .ps-menu-button:hover": {
                backgroundColor: "transparent !important",
              },
            }}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.gray[100]}>
                  ADMINS
                </Typography>
              </Box>
            )}
          </MenuItem>

          {/* user Logo & name*/}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={userImg}
                  alt="profile-user"
                  width="100px"
                  height="100px"
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="h2"
                  textAlign="center"
                  color={colors.gray[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                >
                  MohamedHany
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? null : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed ? (
              <Typography
                variant="h6"
                color={colors.gray[300]}
                sx={{
                  m: "15px 0 5px 20px",
                }}
              >
                Data
              </Typography>
            ) : (
              ""
            )}
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/Invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed ? (
              <Typography
                variant="h6"
                color={colors.gray[300]}
                sx={{
                  m: "15px 0 5px 20px",
                }}
              >
                Profile Form
              </Typography>
            ) : (
              ""
            )}
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed ? (
              <Typography
                variant="h6"
                color={colors.gray[300]}
                sx={{
                  m: "15px 0 5px 20px",
                }}
              >
                Charts
              </Typography>
            ) : (
              ""
            )}
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Area Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geo"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarMenu;
