// mui components
import { Typography, Box, useTheme, CircularProgress } from "@mui/material";
import { keyframes } from "@mui/system";

// others
import { tokens } from "../theme";

// Animation للنص
const pulse = keyframes`
  0% { opacity: 0.3; transform: scale(0.95);}
  50% { opacity: 1; transform: scale(1);}
  100% { opacity: 0.3; transform: scale(0.95);}
`;

const Loading = ({ page_name = "Loading" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        bgcolor: colors.primary[700],
      }}
    >
      <Box textAlign="center">
        <CircularProgress
          size={80}
          thickness={5}
          sx={{
            color: colors.blueAccent[500],
            mb: 3,
          }}
        />
        <Typography
          sx={{
            color: colors.gray[100],
            fontWeight: 700,
            fontSize: "1.5rem",
            letterSpacing: "1px",
            animation: `${pulse} 1.5s infinite`,
          }}
        >
          {page_name}...
        </Typography>
      </Box>
    </Box>
  );
};

export default Loading;
