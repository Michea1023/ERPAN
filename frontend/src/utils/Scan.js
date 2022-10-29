import Scanner from '../utils/Scanner'
import Result from '../utils/Result'
import React, { Component } from 'react'
import '../static/css/style.css'
class Scan extends Component {
  constructor(code) {
    super(code)
    this.code = code
  }
  state = {
    scanning: false,
    results: null,
  }

  render() {
    return (
      <div>
        {this.state.scanning ? (
          <Result result={this.state.result} />
        ) : (
          <Scanner onDetected={this.onDetected} />
        )}
      </div>
    )
  }

  toggleScan = () => {
    this.setState({ scanning: !this.state.scanning })
  }

  onDetected = (result) => {
    this.setState({ result, scanning: true })
  }
}

export default Scan
