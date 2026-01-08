// mui
import { Box, useTheme } from "@mui/material";

// components
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box
        height="78vh"
        border={`1px solid ${colors.gray[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
