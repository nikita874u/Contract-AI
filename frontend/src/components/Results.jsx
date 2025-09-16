function Results({ results }) {
  return (
    <div className="mt-10 w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">📊 Analysis Results</h2>
      {results.map((res, idx) => (
        <div
          key={idx}
          className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
        >
          <p className="text-lg font-medium text-gray-700 mb-2">
            {res.term || "No term found"}
          </p>
          {res.warning && (
            <p className="text-sm text-red-600 font-semibold bg-red-50 px-3 py-2 rounded-lg inline-block">
              ⚠️ {res.warning}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Results;