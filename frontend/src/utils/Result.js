import React from 'react'

const codeScan = (array, callback) => {
  let variable = 0
  let cont = 0
  let index = 0
  array.map((p) => {
    index = 0
    array.map((x) => {
      if (p === x) {
        index++
      }
    })
    if (index > cont) {
      cont = index
      variable = p
    }
  })
  callback(variable)
}

export default class Result extends React.Component {
  state = {
    result: [],
  }
  render() {
    this.state.result = this.props.result
    codeScan(this.state.result, (barCode) => {
      this.state.result = barCode
    })
    if (!this.state.result) {
      return null
    }
    return (
      <div className='codeResult'>
        <h1>{this.state.result}</h1>
      </div>
    )
  }
}
