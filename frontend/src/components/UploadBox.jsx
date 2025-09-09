function UploadBox({ onResults }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/review", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      onResults(data.results);
    } catch (err) {
      console.error("Upload failed", err);
      onResults([]);
    }
  };

  return (
    <div className="flex justify-center">
      <input
        type="file"
        onChange={handleUpload}
        className="border-2 border-blue-300 p-2 rounded-md cursor-pointer"
      />
    </div>
  );
}

export default UploadBox;