import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryState {
  error: Error,
  errorInfo: ErrorInfo,
}

interface ErrorBoundaryProps {
  children: JSX.Element;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: {
        name: '',
        message: '',
        stack: '',
      },
      errorInfo: {
        componentStack: '',
      }
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo
    })
  }

  render(): JSX.Element {
    if (this.state.errorInfo.componentStack) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}