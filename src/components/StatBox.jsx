// mui components
import { useTheme, Box, Typography } from "@mui/material";

// components
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StateBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        {/* icon & title */}
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: colors.gray[100],
            }}
          >
            {title}
          </Typography>
        </Box>
        {/* progress */}
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      {/* subtitle & increase */}
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          sx={{
            color: colors.greenAccent[500],
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          fontWeight="bold"
          sx={{
            color: colors.greenAccent[600],
          }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StateBox;
