export default function CardWithHeader() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6 bg-indigo-950 text-white">
        Card Header Content
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">Card Body Content</div>
    </div>
  );
}
