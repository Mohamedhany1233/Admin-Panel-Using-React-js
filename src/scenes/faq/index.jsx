// mui
import { Box, colors, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// components
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const AccordionComp = (title, details) => (
    <Accordion sx={{ p: "5px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography
          component="span"
          color={colors.greenAccent[300]}
          fontWeight="500"
          borderTop="none"
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails color={colors}>{details}</AccordionDetails>
    </Accordion>
  );

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box sx={{ borderRadius: "15px" }}>
        {AccordionComp(
          "An Important Question",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ducimus, magnam est a accusamus dolores aut ratione molestias aspernatur, voluptatem blanditiis velit, pariatur cum eius suscipit autem itaque quidem iste"
        )}
        {AccordionComp(
          "Another Important Question",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ducimus, magnam est a accusamus dolores aut ratione molestias aspernatur, voluptatem blanditiis velit, pariatur cum eius suscipit autem itaque quidem iste"
        )}
        {AccordionComp(
          "Your Favorite Quesiton",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ducimus, magnam est a accusamus dolores aut ratione molestias aspernatur, voluptatem blanditiis velit, pariatur cum eius suscipit autem itaque quidem iste"
        )}
        {AccordionComp(
          "Some Random Question",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ducimus, magnam est a accusamus dolores aut ratione molestias aspernatur, voluptatem blanditiis velit, pariatur cum eius suscipit autem itaque quidem iste"
        )}
        {AccordionComp(
          "The Final Question",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ducimus, magnam est a accusamus dolores aut ratione molestias aspernatur, voluptatem blanditiis velit, pariatur cum eius suscipit autem itaque quidem iste"
        )}
      </Box>
    </Box>
  );
};

export default FAQ;
