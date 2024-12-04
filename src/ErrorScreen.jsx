const ErrorScreen = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error">
      <h3>We are sorry, something went wrong</h3>
      <p>
        We cannot process your request at this moment. Please try again later.
      </p>
      <p>ERROR: {error.message}</p>
      <p>{error.component}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

export default ErrorScreen;
