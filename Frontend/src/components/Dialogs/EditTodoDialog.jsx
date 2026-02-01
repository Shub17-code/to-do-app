import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";

const EditTodoDialog = ({ open, todo, onClose, onSave, isUpdating }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (todo) {
      setForm({
        title: todo.title,
        description: todo.description,
      });
    }
  }, [todo]);

  const handleSubmit = () => {
    onSave(todo._id, form);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Edit Todo</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            fullWidth
          />

          <TextField
            label="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            fullWidth
            multiline
            rows={3}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={isUpdating}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTodoDialog;
