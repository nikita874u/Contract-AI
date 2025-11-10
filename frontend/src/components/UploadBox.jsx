import { UploadCloud } from "lucide-react";

function UploadBox({ onResults, setLoading, darkMode }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:8000/analyze_contract", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      onResults(data);
    } catch (error) {
      onResults({ error: "⚠️ Unable to connect to FastAPI server." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-2xl p-8 mb-8 transition-all ${
        darkMode
          ? "border-blue-900 bg-gray-800/50 hover:bg-gray-800/70"
          : "border-blue-300 bg-gradient-to-br from-white to-blue-50 hover:from-blue-50 hover:to-blue-100"
      }`}
    >
      <UploadCloud
        className={`w-14 h-14 mx-auto mb-3 animate-pulse ${
          darkMode ? "text-blue-400" : "text-blue-500"
        }`}
      />
      <h3
        className={`text-xl font-semibold ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        Upload your contract file
      </h3>
      <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        (Supports .txt or .pdf)
      </p>
      <input
        type="file"
        accept=".txt,.pdf"
        onChange={handleUpload}
        className="block mx-auto file:mr-3 file:py-2 file:px-5 file:rounded-full file:border-0 
                   file:bg-gradient-to-r file:from-blue-500 file:to-indigo-500 
                   file:text-white file:font-semibold hover:file:from-indigo-600 hover:file:to-blue-600 
                   cursor-pointer transition-all"
      />
    </div>
  );
}

export default UploadBox;
