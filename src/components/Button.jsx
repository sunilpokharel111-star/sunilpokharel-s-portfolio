export default function Button({ children, onClick, type = "button", className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 bg-accent text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-xl hover:bg-accent/90 transition ${className}`}
    >
      {children}
    </button>
  );
}