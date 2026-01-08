import { ResponsivePie } from "@nivo/pie";

// mui components
import { Box, Typography, useTheme } from "@mui/material";

// components
import { tokens } from "../theme";

// data
import { mockPieData as data } from "../Data/mockData";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.9}
      activeOuterRadiusOffset={8}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsThickness={3}
      arcLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.gray[100]}
      colors={{ scheme: "blues" }}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 8]] }}
      tooltip={(values) => (
        <Box
          style={{
            background: colors.primary[500],
            padding: "10px",
            borderRadius: "4px",
            width: "100px",
          }}
        >
          <Typography
            color="white"
            fontWeight="bold"
            textAlign="center"
            fontSize="15px"
          >
            {values.datum.value}
          </Typography>
        </Box>
      )}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          symbolShape: "circle",
        },
      ]}
      theme={{
        text: {
          fontSize: 12,
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "#ffffff",
        },
        axis: {
          domain: {
            line: {
              stroke: colors.gray[100],
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fill: colors.gray[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.gray[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.gray[100],
            },
          },
        },
        grid: {
          line: {
            stroke: "#dddddd",
            strokeWidth: 1,
          },
        },
        legends: {
          text: {
            fill: colors.gray[100],
          },
        },
      }}
    />
  );
};

export default PieChart;
