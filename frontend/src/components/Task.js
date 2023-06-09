import Box from "@mui/material/Box";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Task = () => {
  return (
    <Box sx={{ display: "flex", bgcolor: "grey" }}>
      My task
      <DoneAllIcon color="success" />
      <EditCalendarIcon color="secondary" />
      <DeleteForeverIcon color="error" />
    </Box>
  );
};

export default Task;
