// mui components
import { Box, Button, colors, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// formik
import { Formik } from "formik";

// yup
import * as yup from "yup";

// components
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("First name must be filled"),
  lastName: yup.string().required("Last name must be filled"),
  email: yup.string().email("invalid email").required("invalid email"),
  contact: yup
    .string()
    .matches(phoneRegex, "The phone number is not valid")
    .required("Phone Number Must Be filled"),
  address1: yup.string().required("invalid address"),
  address2: yup.string().required("invalid address"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? null : "span 4",
                },
              }}
            >
              <TextField
                name="firstName"
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={!!touched.firstName && errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: "span 2",
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#1e1e1e",
                  },
                  "& .MuiFilledInput-root.Mui-focused": {
                    backgroundColor: "#2c2c2c",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4caf50",
                  },
                }}
              />
              <TextField
                name="lastName"
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                error={!!touched.lastName && errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: "span 2",
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#1e1e1e",
                  },
                  "& .MuiFilledInput-root.Mui-focused": {
                    backgroundColor: "#2c2c2c",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4caf50",
                  },
                }}
              />
              <TextField
                name="email"
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                onSubmit={handleSubmit}
                value={values.email}
                error={!!touched.email && errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 4",
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#1e1e1e",
                  },
                  "& .MuiFilledInput-root.Mui-focused": {
                    backgroundColor: "#2c2c2c",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4caf50",
                  },
                }}
              />
              <TextField
                name="contact"
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onChange={handleChange}
                onBlur={handleBlur}
                onSubmit={handleSubmit}
                value={values.contact}
                error={!!touched.contact && errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{
                  gridColumn: "span 4",
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#1e1e1e",
                  },
                  "& .MuiFilledInput-root.Mui-focused": {
                    backgroundColor: "#2c2c2c",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4caf50",
                  },
                }}
              />
              <TextField
                name="address1"
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onChange={handleChange}
                onBlur={handleBlur}
                onSubmit={handleSubmit}
                value={values.address1}
                error={!!touched.address1 && errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{
                  gridColumn: "span 4",
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#1e1e1e",
                  },
                  "& .MuiFilledInput-root.Mui-focused": {
                    backgroundColor: "#2c2c2c",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4caf50",
                  },
                }}
              />
              <TextField
                name="address2"
                fullWidth
                variant="filled"
                type="text"
                label="Address 2 (optional)"
                onChange={handleChange}
                onBlur={handleBlur}
                onSubmit={handleSubmit}
                value={values.address2}
                sx={{
                  gridColumn: "span 4",
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#1e1e1e",
                  },
                  "& .MuiFilledInput-root.Mui-focused": {
                    backgroundColor: "#2c2c2c",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4caf50",
                  },
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained" color="secondary">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
