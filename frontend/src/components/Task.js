import Box from "@mui/material/Box";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Task = ({ task, index }) => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "grey",
        marginBottom: "10px",
        height: "60px",
      }}
    >
      <b>{index + 1}. </b>
      {task.name}
      <DoneAllIcon color="success" />
      <EditCalendarIcon color="secondary" />
      <DeleteForeverIcon color="error" />
    </Box>
  );
};

export default Task;
