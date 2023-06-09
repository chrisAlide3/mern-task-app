import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import TaskForm from "./TaskForm";
import { useState } from "react";
import Task from "./Task";
import { toast } from "react-toastify";
import { URL } from "../App";

const TaskList = () => {
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });

  const { name } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("Input field cannot be empty");
    }

    try {
      await axios.post(`${URL}/api/tasks/`, formData);
      setFormData({ ...formData, name: "" });
      toast.success("Task added successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <Box>
      <Typography variant="h2">Task Manager</Typography>
      <TaskForm
        createTask={createTask}
        name={name}
        handleInputChange={handleInputChange}
      />
      <Box display="flex" alignItems="spaceBetween">
        <Typography variant="h4">Total Tasks</Typography>
        <Typography variant="h4">Completed Tasks</Typography>
      </Box>
      <Task />
    </Box>
  );
};

export default TaskList;
