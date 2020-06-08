import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import GlobalStyle from './styles/global'
import api from './services/api'

function App() {
  useEffect(() => {
    api
      .post('/api', {
        body: `query{
        allTeachers{
          edges{
            node {id, nome }
          }
          totalCount
        }
      }`,
      })
      .then((response) => console.log('> ', response))
  }, [])

  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
