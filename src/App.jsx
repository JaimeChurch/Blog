import React from 'react';
import { Box, Paper } from '@mui/material';
import './App.css';

function SimplePaper({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        margin: 1,
      }}
    >
      <Paper elevation={2} sx={{ padding: 2 }}>
        {children}
      </Paper>
    </Box>
  );
}

export default function App() {
  return (
    <>
      <h1>React Blog</h1>
      <SimplePaper>
        <h3>To Do:</h3>
        <ul>
          <li>Home button</li>
          <li>Add note card styling</li>
          <li>Import questions</li>
          <li>Make answers clickable</li>
          <li>Flip animation</li>
          <li>Add topic selection</li>
          <li>Add high score table</li>
        </ul>
      </SimplePaper>

      <SimplePaper>
        <h3>Week 1</h3>
        <ul>
          <li>Started new PMBOK flashcard app.</li>
        </ul>
      </SimplePaper>

      <SimplePaper>
        <h3>Week 2</h3>
        <ul>
          <li>Started new PMBOK flashcard app.</li>
        </ul>
      </SimplePaper>

      <SimplePaper>
        <h3>Week 2</h3>
        <ul>
          <li>Started new PMBOK flashcard app.</li>
        </ul>
      </SimplePaper>
    </>
  );
}