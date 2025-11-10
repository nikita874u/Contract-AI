import { FileText, Loader2 } from "lucide-react";

function Results({ loading, result, darkMode }) {
  return (
    <div className="text-left">
      <h2
        className={`text-2xl font-bold flex items-center gap-2 mb-4 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <FileText className="w-6 h-6 text-blue-500" /> Analysis Results
      </h2>

      <div
        className={`rounded-2xl p-4 h-60 overflow-y-auto border ${
          darkMode
            ? "bg-gray-800/70 border-gray-700 text-gray-200"
            : "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100 text-gray-800"
        }`}
      >
        {loading ? (
          <div className="flex items-center justify-center h-full text-blue-500">
            <Loader2 className="w-6 h-6 animate-spin mr-2" />
            <span className="text-sm">Analyzing your document...</span>
          </div>
        ) : result ? (
          <pre className="text-sm whitespace-pre-wrap font-mono">
            {JSON.stringify(result, null, 2)}
          </pre>
        ) : (
          <p className="italic text-gray-500">No file uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default Results;
