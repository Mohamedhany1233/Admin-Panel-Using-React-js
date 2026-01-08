// mui
import { Box } from "@mui/material";

// components
import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
import AreaChart_ from "../../components/AreaChart";

const Area = () => {
  return (
    <Box m="20px">
      <Header title="Area Chart" subtitle="Simple Area Chart" />
      <Box height="75vh">
        <AreaChart_ />
      </Box>
    </Box>
  );
};

export default Area;
