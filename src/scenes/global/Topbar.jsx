import {
  Box,
  Icon,
  IconButton,
  InputBase,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

// mui icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// contexts
import { isCollapsedSidebar } from "../../contexts/IsCollapsedSidebar";
import { isToggledSidebar } from "../../contexts/IsCollapsedSidebar";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { isCollapsed, setIsCollapsed } = useContext(isCollapsedSidebar);
  const { isToggled, setIsToggled } = useContext(isToggledSidebar);

  const handleSidebarShow = () => {
    !isMobile ? setIsCollapsed(!isCollapsed) : null;
    setIsToggled(true);
  };

  return (
    <Box
      p={2}
      sx={{
        "@media (max-width:750px)": {
          position: "absolute",
          width: "100%",
          marginBottom: "200px",
          bgcolor: colors.primary[500],
          zIndex: "20",
        },
      }}
    >
      <Box display="flex" justifyContent="space-between">
        {/* search bar & open sidebar */}
        <Box display="flex" alignItems="center" gap="20px">
          <Box sx={{ cursor: "pointer" }} mt="4px">
            <IconButton onClick={handleSidebarShow}>
              <MenuOutlinedIcon sx={{ color: colors.gray[100] }} />
            </IconButton>
          </Box>
          {!isMobile && (
            <Box
              display="flex"
              bgcolor={colors.primary[400]}
              borderRadius="3px"
            >
              <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
              <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon />
              </IconButton>
            </Box>
          )}
        </Box>

        {/* Icons on the right */}
        <Box display="flex" order="3">
          <IconButton onClick={() => colorMode.toggleColorMode()}>
            {theme.palette.mode == "dark" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      {isMobile && (
        <Box
          display="flex"
          bgcolor={colors.primary[400]}
          borderRadius="3px"
          p="6px"
          mt="20px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Topbar;
