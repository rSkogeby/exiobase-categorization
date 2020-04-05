import React, { useState } from 'react'
import './App.css'
import {
  Grid,
  Box,
  styled,
  TextField,
  Button,
} from '@material-ui/core'
import randomWords from 'random-words'

function App() {
  const [customerData, setCustomerData] = useState([])
  const [errorLog, updateErrorLog] = useState([])
  const [companyName, setCompanyName] = useState('Company name')
  const [description, setDescription] = useState('Description')
  const [optionOne, setOptionOne] = useState('Option 1')
  const [optionTwo, setOptionTwo] = useState('Option 2')
  const [optionThree, setOptionThree] = useState('Option 3')

  const getCustomerData = async () => {
    fetch('/api/get/data/acustomername', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(
      async response => setCustomerData(JSON.parse(await response.text()).response)
    ).catch(err => { updateErrorLog([err.message, ...errorLog]) })
  }

  const handleOptionOne = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const handleOptionTwo = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const handleOptionThree = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const updateAllFieldsWithRandomWordsBecauseOfTimeRestrictions = (e) => {
    setCompanyName(randomWords(2).join(' ').toUpperCase())
    setDescription(randomWords(8).join(' '))
    setOptionOne([parseInt(Math.random(4)*1000), randomWords(4).join(' ')].join(': '))
    setOptionTwo([parseInt(Math.random(4)*1000), randomWords(5).join(' ')].join(': '))
    setOptionThree([parseInt(Math.random(4)*1000), randomWords(3).join(' ')].join(': '))
  }

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
          <p>{companyName}</p>
          <p>{description}</p>
        </Box>
        <Box width='60%'>
          <Button
            onClick={updateAllFieldsWithRandomWordsBecauseOfTimeRestrictions}
          >
            {optionOne}
          </Button>
          <Button
            onClick={updateAllFieldsWithRandomWordsBecauseOfTimeRestrictions}
          >
            {optionTwo}
          </Button>
          <Button
            onClick={updateAllFieldsWithRandomWordsBecauseOfTimeRestrictions}
          >
            {optionThree}
          </Button>
        </Box>
      </Grid>
      </>
    </div>
  );
}

export default App
