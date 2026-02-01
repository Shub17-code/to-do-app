import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Circle, CircleCheckBig, Trash2, Pencil } from "lucide-react";

const Todo = ({
  todo,
  updateTodo,
  updatingTodoId,
  setTodoToDelete,
  handleOpenDeleteDialog,
  onEdit,
}) => {
  const { title, description, isCompleted, _id } = todo;

  const handleToggleComplete = () => {
    updateTodo(_id, { isCompleted: !isCompleted });
  };

  const handleDelete = () => {
    setTodoToDelete(todo);
    handleOpenDeleteDialog();
  };

  return (
    <Card sx={{ width: 260 }}>
      <Stack justifyContent="space-between">
        <CardContent sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: 2, left: 8 }}>
            {isCompleted ? (
              <CircleCheckBig color="rgb(103,172,0)" size={20} />
            ) : (
              <Circle color="rgb(184,184,184)" size={20} />
            )}
          </Box>

          <Typography align="center" variant="h6">
            {title}
          </Typography>

          <Typography my={2} variant="body2">
            {description}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "space-between" }}>
          <LoadingButton
            loading={updatingTodoId === _id}
            variant="outlined"
            size="small"
            onClick={handleToggleComplete}
          >
            {isCompleted ? "Mark Pending" : "Mark Done"}
          </LoadingButton>

          <Stack direction="row" spacing={1}>
            <Tooltip title="Edit Todo">
              <IconButton color="primary" onClick={() => onEdit(todo)}>
                <Pencil size={18} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete Todo">
              <IconButton color="error" onClick={handleDelete}>
                <Trash2 size={18} />
              </IconButton>
            </Tooltip>
          </Stack>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default Todo;
