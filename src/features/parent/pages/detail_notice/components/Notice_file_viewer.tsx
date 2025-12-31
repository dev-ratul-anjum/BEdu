interface Notice_file_viewerProps {
  fileUrl?: string;
}

export const Notice_file_viewer: React.FC<Notice_file_viewerProps> = ({ fileUrl }) => {
  if (!fileUrl) {
    return (
      <div className="border-2 border-gray-900 rounded-lg flex items-center justify-center h-full bg-gray-50">
        <span className="text-sm text-gray-600">No file attached</span>
      </div>
    );
  }

  const isPdf = fileUrl.endsWith('.pdf');

  return (
    <div
      className="border-2 border-gray-900 rounded-lg h-full overflow-hidden bg-white"
      style={{ minHeight: 300 }}
    >
      {isPdf ? (
        <iframe
          src={fileUrl}
          className="w-full h-full"
          title="Notice PDF"
        />
      ) : (
        <img
          src={fileUrl}
          alt="Notice file"
          className="w-full h-full object-contain"
        />
      )}
    </div>
  );
};
