// mui components
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

// mui icons
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

// components
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Statebox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

// Charts components
import BarChart_ from "../../components/BarChart";
import AreaChart_ from "../../components/AreaChart";
import GeographyChart from "../../components/GeographyChart";

// data
import { mockTransactions } from "../../Data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const MockElements = mockTransactions.map((transactions, i) => (
    <Box
      key={`${transactions.txId}-${i}`}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`4px solid ${colors.primary[500]}`}
      p="15px"
    >
      <Box>
        <Typography
          color={colors.greenAccent[500]}
          variant="h5"
          fontWeight="600"
        >
          {transactions.txId}
        </Typography>
        <Typography color={colors.gray[100]}>{transactions.user}</Typography>
      </Box>
      <Box color={colors.gray[100]}>{transactions.date}</Box>
      <Box
        bgcolor={colors.greenAccent[500]}
        padding="5px 10px"
        borderRadius="4px"
      >
        ${transactions.cost}
      </Box>
    </Box>
  ));

  return (
    <Box m="20px">
      {/* SEARCH & DOWNLOAD BUTTON */}
      <Box display="flex" justifyContent="space-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              bgcolor: colors.blueAccent[700],
              color: colors.gray[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              border: `1px solid ${colors.blueAccent[700]} `,
              transition: "ease 0.3s ",
              ":hover": {
                bgcolor: "transparent",
              },
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* CARDS == ROW 1*/}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gap="20px"
        height="150px"
      >
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Statebox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Statebox
            title="431.225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Statebox
            title="32.441"
            subtitle="New Clintes"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Statebox
            title="12,325,134"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>

      {/* GRID & CHARTS == ROW 2 */}
      <Box
        height="400px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="20px"
        mt={2}
      >
        {/* LINE CHART */}
        <Box
          gridColumn="span 8"
          bgcolor={colors.primary[400]}
          p="30px"
          display="flex"
          flexDirection="column"
          minHeight={0}
        >
          {/* HEADER */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.gray[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{ fontSize: 26, color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
          {/* CHART */}
          <Box overflow="hidden" mt="8px" height="100% !important">
            <AreaChart_ />
          </Box>
        </Box>

        {/* TRANSACTIONS */}
        <Box
          gridColumn="span 4"
          bgcolor={colors.primary[400]}
          p="16px"
          overflow="auto"
          gridTemplateRows="span 2"
          minHeight={0}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            borderBottom={`4px solid ${colors.primary[200]}`}
            pb="10px"
            mb="10px"
          >
            <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>

          {MockElements}
        </Box>
      </Box>

      {/* ROW 3 */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="20px"
        mt={2}
      >
        <Box
          gridColumn="span 4"
          bgcolor={colors.primary[400]}
          p="30px"
          height="100%"
        >
          {/* header */}
          <Typography variant="h5" fontWeight="600">
            Campain
          </Typography>

          {/* content */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box gridColumn="span 4" bgcolor={colors.primary[400]}>
          {/* header */}
          <Typography variant="h5" fontWeight="600" p="25px 30px 0 30px">
            Sales Quantity
          </Typography>

          {/* content */}
          <Box height="250px" m="15px">
            <BarChart_ isDashboard={true} />
          </Box>
        </Box>
        <Box gridColumn="span 4" bgcolor={colors.primary[400]} p="30px">
          {/* header */}
          <Typography variant="h5" fontWeight="600" mb="15px">
            Geography Based Traffic
          </Typography>

          {/* content */}
          <Box height="250px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
