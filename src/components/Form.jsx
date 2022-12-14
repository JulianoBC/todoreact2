import { TextField, Paper, Button } from '@mui/material';
import React from "react";

export default function Form() {
    return (
        <Paper style={{ padding: "1em" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              id="outlined-basic"
              label="Tarefa"
              variant="outlined"
              fullWidth
            />
            <Button variant="text">
              Add
            </Button>
          </div>
        </Paper>
      );
    }