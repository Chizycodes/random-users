import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    console.log("loggin", error, info);
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  render() {
    if (this.state.errorMessage) {
      return <div className='h-screen w-screen flex items-center justify-center font-bold text-xl'><h1>{this.state.errorMessage}</h1></div>

    }
    return this.props.children;
  }
}

export default ErrorBoundary;