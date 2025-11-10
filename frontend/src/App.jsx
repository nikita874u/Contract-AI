import { useState, useEffect } from "react";
import UploadBox from "./components/UploadBox";
import Results from "./components/Results";
import { Sun, Moon } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleResults = (data) => setResult(data);

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800"
          : "bg-gradient-to-br from-indigo-50 via-sky-100 to-blue-50"
      }`}
    >
      <div
        className={`rounded-3xl p-10 w-full max-w-3xl border backdrop-blur-lg shadow-lg transition-all duration-500 ${
          darkMode
            ? "bg-gray-900/90 border-gray-700 shadow-blue-900/40"
            : "bg-white/90 border-blue-100 shadow-blue-100/60"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1
            className={`text-4xl sm:text-5xl font-extrabold ${
              darkMode ? "text-blue-400" : "text-blue-700"
            }`}
          >
            🤖 AI Contract Reviewer
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-all hover:scale-110"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-blue-700" />
            )}
          </button>
        </div>

        <p
          className={`text-center mb-8 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Upload your contract and let AI analyze{" "}
          <span className="text-blue-500 font-medium">risks</span>,{" "}
          <span className="text-blue-500 font-medium">clauses</span>, and{" "}
          <span className="text-blue-500 font-medium">compliance</span> —
          instantly and intelligently.
        </p>

        <UploadBox onResults={handleResults} setLoading={setLoading} darkMode={darkMode} />
        <Results result={result} loading={loading} darkMode={darkMode} />

        <footer
          className={`mt-8 text-center text-sm ${
            darkMode ? "text-gray-500" : "text-gray-600"
          }`}
        >
          © 2025{" "}
          <span
            className={`font-semibold ${
              darkMode ? "text-blue-400" : "text-blue-700"
            }`}
          >
            AI Contract Reviewer
          </span>{" "}
          — Built with 💙 React + FastAPI
        </footer>
      </div>
    </div>
  );
}

export default App;
