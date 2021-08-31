import React from 'react'
import * as Sentry from '@sentry/react'

class ErrorBoundary extends React.Component {
  state = {
    error: false,
  }

  componentDidCatch(error, info) {
    console.log('에러가 발생했습니다.')
    console.log({
      error,
      info,
    })
    this.setState({
      error: true,
    })
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error, { extra: info })
    }
  }

  render() {
    return this.state.error ? <h1>에러 발생!</h1> : this.props.children
  }
}

export default ErrorBoundary
