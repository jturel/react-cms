import React from 'react'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? ` we got return code ${this.props.statusCode }`
          : ' client error '}
      </p>
    )
  }
}

export default Error
