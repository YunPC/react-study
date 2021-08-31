import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    error: false
  }

  componentDidCatch(error, info){
    console.log('에러가 발생했습니다.')
    console.log({
      error,
      info
    });
    this.setState({
      error: true
    })
  }

  render(){
    return this.state.error ? (<h1>에러 발생!</h1>) : this.props.children
  }
}

export default ErrorBoundary;