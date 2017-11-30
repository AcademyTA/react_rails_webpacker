import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import QuestionShow from './QuestionShow'

const App = (props) => (
  <Router>
    <div>
      <Route
        path='/'
        component={QuestionShow}
      />
    </div>
  </Router>
)

export default App
