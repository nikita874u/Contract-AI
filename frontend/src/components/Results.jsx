function Results({ results }) {
  return (
    <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
      <h2 className="text-xl font-semibold mb-3">Analysis Results:</h2>
      <ul className="list-disc ml-6">
        {results.map((r, idx) => (
          <li key={idx} className="mb-2">
            <strong>{r.term}</strong>: {r.warning}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;