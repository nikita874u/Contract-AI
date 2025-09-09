import { useState } from "react";
import Results from "./components/Results";
import UploadBox from "./components/UploadBox";

function App() {
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);

  const handleResults = (data) => {
    setResults(data);
    setShow(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
          📑 Contract AI Reviewer
        </h1>

        <UploadBox onResults={handleResults} />

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShow(!show)}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {show ? "Hide Results" : "Show Results"}
          </button>
        </div>

        {show && results.length > 0 && <Results results={results} />}

        {show && results.length === 0 && (
          <p className="mt-6 text-gray-500 text-center">
            ⚠️ No analysis results found. Please upload a contract file.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;