import React from 'react'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Loaded: false
    }
  }

  componentDidMount () {
    window
      .fetch('https://aws.random.cat/meow')
      .then(res => res.json())
      .then(json => {
        console.log(json.rates)
        this.setState({
          Loaded: true,
          images: json.file
        })
      })
  }

  render () {
    const { Loaded, images } = this.state
    console.log(this.state)
    if (!Loaded) {
      return <h1 Style='text'> 読み込み中です！！ </h1>
    } else {
      return (
        <div>
          <h1 Style='text'>MEOW</h1>
          <img src={images} width='100%' height='800' />
        </div>
      )
    }
  }
}

export default App
