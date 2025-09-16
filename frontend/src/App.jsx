import { useState } from "react";
import Results from "./components/Results";
import UploadBox from "./components/UploadBox";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 drop-shadow">
        📑 AI Contract Reviewer
      </h1>

      <UploadBox onResults={setResults} />

      {results.length > 0 && (
        <Results results={results} />
      )}
    </div>
  );
}

export default App;