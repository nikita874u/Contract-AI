import { useState } from "react";

function UploadBox({ onResults }) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:8000/analyze/", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      onResults(data.results);
    } catch (err) {
      console.error("Upload failed", err);
      onResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <label className="w-full cursor-pointer">
        <div className="p-6 border-2 border-dashed border-blue-400 rounded-xl text-center bg-white hover:bg-blue-50 transition shadow-sm">
          <p className="text-gray-700 font-medium">
            📂 Upload your contract file
          </p>
          <p className="text-xs text-gray-500 mt-1">(.txt or .docx)</p>
        </div>
        <input
          type="file"
          onChange={handleUpload}
          className="hidden"
        />
      </label>

      {loading && (
        <div className="mt-6 w-full p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg border border-blue-200 flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid mb-4"></div>
          <p className="text-blue-700 font-semibold text-lg text-center">
            ⏳ Analyzing your contract...
          </p>
          <p className="text-gray-500 text-sm text-center mt-2">
            This may take a few seconds depending on contract length.
          </p>
        </div>
      )}
    </div>
  );
}

export default UploadBox;