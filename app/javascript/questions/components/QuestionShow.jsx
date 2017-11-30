import React from 'react'

class QuestionShow extends React.Component {
  constructor() {
    super()
    this.state = {
      question: {},
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/questions/1')
    .then(res => res.json())
    .then(question => this.setState({question: question}))
  }

  render() {
    return (
      <h3>
        This should be a question... {this.state.question.text}
      </h3>
    )
  }
}

export default QuestionShow
