import { useState } from "react";

function App() {
  // Define the available colors and their corresponding Tailwind classes
  const colorMap = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
  };

  const [color, setColor] = useState("orange"); // Set initial color

  return (
    <div
      style={{
        backgroundColor: color, // Set background color using state
        height: "100vh", // Full height of the viewport
        width: "100vw", // Full width of the viewport
        transition: "background-color 0.3s ease", // Smooth transition effect
      }}
    >
      {/* Button container */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Loop through the colors array to generate buttons */}
          {Object.keys(colorMap).map((col) => (
            <button
              key={col} // Unique key for each button
              onClick={() => setColor(col)} // Set color on button click
              className={`outline-none px-4 py-1 rounded-full text-white shadow-lg ${colorMap[col]}`}
            >
              {col.charAt(0).toUpperCase() + col.slice(1)} {/* Capitalize the color name */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
