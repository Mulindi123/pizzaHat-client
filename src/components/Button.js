export const Button = ({ text, onClick, className = "", variant = "primary", textColor = "text-white" }) => {
  const variants = {
    primary: "from-purple-500 to-pink-600 hover:from-purple-700 hover:to-pink-800",
    secondary: "bg-gray-800 hover:bg-blue-700",
    accent: "bg-yellow-500 hover:bg-yellow-600",
  };

  return (
    <button
      className={`p-3 bg-gradient-to-br ${variants[variant]} ${textColor} font-semibold rounded-lg 
                  shadow-lg transition-transform transform hover:scale-105 active:scale-95 
                  mt-4 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};




export const Button1 = ({ text, onClick, className, isActive }) => {
  return (
    <div>
      <button
        className={`p-2 rounded-lg mt-4 ${
          isActive
            ? "bg-gradient-to-br from-custom-red to-custom-orange text-white px-6"
            : "text-black hover:bg-blue-200"
        } ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
