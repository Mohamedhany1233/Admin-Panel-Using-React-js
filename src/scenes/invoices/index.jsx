// mui components
import { Box, Toolbar, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// mui Icons
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

// components
import { tokens } from "../../theme";
import Header from "../../components/Header";

// mock data
import { mockDataInvoices } from "../../Data/mockData";
import { GridToolbar } from "@mui/x-data-grid/internals";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name--column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]} mt="15px">
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="The List Of Invoices Balances" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          checkboxSelection
          sx={{
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
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.gray[100]} !important`,
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
