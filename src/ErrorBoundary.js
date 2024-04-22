// ErrorBoundary.js

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
             <h1>Something went wrong.</h1> 
             <p>Olamilekan apologizes for the inconvenience. Please try again later.</p>
             </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
