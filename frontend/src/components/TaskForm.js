import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ariaLabel = { "aria-label": "Task Input" };

const TaskForm = ({ createTask, name, handleInputChange }) => {
  return (
    <Box
      component="form"
      onSubmit={createTask}
      sx={{
        display: "flex",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        name="name"
        value={name}
        placeholder="Enter new Task"
        fullWidth
        inputProps={ariaLabel}
        onChange={handleInputChange}
      />
      <Button color="success" variant="contained" size="large" type="submit">
        Add
      </Button>
      <Button color="secondary" variant="contained" size="large" type="submit">
        Edit
      </Button>
    </Box>
  );
};

export default TaskForm;
