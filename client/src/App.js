import React from 'react'
import './App.css'
import {
  Grid,
  Box,
  styled,
  TextField,
  Button,
} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Box width='60%'>
          <p>Company name</p>
          <p>Description</p>
        </Box>
        <Box width='60%'>
          <Button>
            Option 1
          </Button>
          <Button>
            Option 1
          </Button>
          <Button>
            Option 1
          </Button>
        </Box>
      </Grid>
      </>
    </div>
  );
}

export default App
