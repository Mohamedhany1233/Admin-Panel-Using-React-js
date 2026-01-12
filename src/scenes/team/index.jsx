// mui components
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// mui Icons
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

// components
import { tokens } from "../../theme";
import Header from "../../components/Header";

// mock data
import { mockDataTeam } from "../../Data/mockData";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.4,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name--column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      flex: 0.4,
      hide: isMobile, // 👈 يتشال على الموبايل
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      hide: isMobile, // 👈 يتشال على الموبايل
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.2,
      hide: isMobile, // 👈 يتشال على الموبايل
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width={isMobile ? "100%" : "60%"}
          m="10px auto"
          p="5px"
          display="flex"
          justifyContent="center"
          bgcolor={
            access === "admin"
              ? colors.greenAccent[600]
              : colors.greenAccent[700]
          }
          borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          {access === "manager" && <SecurityOutlinedIcon />}
          {access === "user" && <LockOpenOutlinedIcon />}
          <Typography
            color={colors.gray[100]}
            sx={{ ml: "5px", fontSize: isMobile ? "12px" : "14px" }}
          >
            {access}
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "@media (max-width:600px)": {
            width: "100%",
            borderRadius: "8px",
          },
          overflowX: "auto",
        }}
        width="auto"
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          sx={{
            "@media (max-width:600px)": {
              width: "1100px",
            },
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name--column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiDataGrid-virtualScroller": {
              bgcolor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: colors.blueAccent[700],
              borderTop: "none",
            },
            "& .MuiTablePagination-root": {
              color: colors.gray[100],
            },
            "& .MuiTablePagination-selectIcon": {
              color: colors.gray[100],
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Team;
