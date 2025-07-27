import mario from "./assets/characters/mario.png";

function SimpleTest() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Test Page</h1>
      
      <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Mario</h2>
        <img 
          src={mario} 
          alt="Mario" 
          className="w-full h-auto"
          onError={(e) => console.error("Failed to load image:", e)}
          onLoad={() => console.log("Image loaded successfully")}
        />
        <p className="mt-4">This is a test to see if images load correctly.</p>
      </div>
    </div>
  );
}

export default SimpleTest;
