import { useState } from "react";

// calendar
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core";

// mui components
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// components
import Header from "../../components/Header";
import { tokens } from "../../theme";
import FullCalendar from "@fullcalendar/react";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvents, setCurrentEvents] = useState([]);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAddEvent = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleDeleteEvent = (selectedEvent) => {
    const IsSure = window.confirm(
      `Are you sure you want delete the event "${selectedEvent.event.title}"`
    );

    if (IsSure) {
      selectedEvent.event.remove();
    }
  };

  const CalendarEvent = currentEvents.map((e) => (
    <ListItem
      key={e._def.defId}
      sx={{
        backgroundColor: colors.greenAccent[800],
        margin: "10px 0",
        borderRadius: "2px",
      }}
    >
      <ListItemText
        primary={<Typography>{e.title}</Typography>}
        secondary={<Typography>{formatDate(e.start)}</Typography>}
      />
    </ListItem>
  ));

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full calendar Interactive Page" />
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          "@media (max-width:760px)": {
            flexDirection: "column",
            gap: "50px",
          },
        }}
      >
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          height="75vh"
          bgcolor={colors.primary[400]}
          p="15px"
        >
          <Typography variant="h5">Events</Typography>
          <List
            sx={{
              overflowY: currentEvents.length > 3 ? "scroll" : "",
              scrollbarWidth: "1px",
              height: "100%",
            }}
          >
            {CalendarEvent}
          </List>
        </Box>
        {/* CALENDAR */}
        <Box
          flex="1 1 100%"
          sx={{
            ml: isMobile ? "4px" : "12px",
          }}
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={
              !isMobile
                ? {
                    left: "prev,next,today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek timeGridDay,listMonth",
                  }
                : { right: "prev,next" }
            }
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleAddEvent}
            eventClick={handleDeleteEvent}
            initialEvents={currentEvents}
            eventsSet={(events) => {
              setCurrentEvents(events);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
