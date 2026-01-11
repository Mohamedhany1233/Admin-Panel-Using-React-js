// mui components
import { Box, Toolbar, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// components
import { tokens } from "../../theme";
import Header from "../../components/Header";

// mock data
import { mockDataContacts, mockDataTeam } from "../../Data/mockData";
import { GridToolbar } from "@mui/x-data-grid/internals";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "registrarId", headerName: "Register Id" },
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
      headerAlign: "left",
      align: "left",
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Contacts"
        subtitle="The List Of Contacts For Future Refrence"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "@media (max-width:600px)": {
            width: "800px",
          },
          overflowX: "auto",
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          sx={{
            "@media (max-width:840px)": {
              width: "2000px",
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
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.gray[100]} !important`,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
