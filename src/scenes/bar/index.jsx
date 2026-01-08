// mui
import { Box } from "@mui/material";

// components
import Header from "../../components/Header";
import BarChart_ from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart_ />
      </Box>
    </Box>
  );
};

export default Bar;
