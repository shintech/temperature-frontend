import React from 'react'
import io from 'socket.io-client'

const socket = io()

export default class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      temp: {
        fahrenhiet: 0,
        celcius: 0
      }
    }
    subscribeToTemperature((err, temp) => {
      if (err) return console.log(err)
      console.log(temp)

      this.setState({
        temp
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Temperature</h1>
        <p>{this.state.temp.fahrenhiet.toFixed(3)} F</p>
        <p>{this.state.temp.celcius.toFixed(3)} C</p>
      </div>
    )
  }
}

// socket.on('render', () => {
//   console.log('laksdfjlasjflk')
// })
// io.on('render', () => {
//   console.log('test')
// })
function subscribeToTemperature (cb) {
  socket.on('render', (data) => {
    cb(null, data)
  })
}
