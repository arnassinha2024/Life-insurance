export default function DownloadButton() {
  const handleDownload = () => {
    // Logic to download the PDF
    console.log('Downloading PDF...');
  };

  return (
    <button onClick={handleDownload} className="download-button">
      Download PDF
    </button>
  );
}