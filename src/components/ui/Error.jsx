const Error = ({ message = "Something went wrong.", onRetry }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-6 text-red-700 rounded-lg text-center my-4 shadow">
      <div className="font-bold text-lg mb-2">Error</div>
      <div className="mb-4">{message}</div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-1 bg-red-700 text-white rounded hover:bg-red-800 transition"
        >
          Retry
        </button>
      )}
    </div>
  );
};


export default Error;