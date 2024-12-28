import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (noAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()+-./\\{}`~<>";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, noAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, noAllowed, charAllowed, passwordGenerator]);

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select(); // Select the input text
      navigator.clipboard.writeText(password); // Copy to clipboard
      // inputRef.current.value = "Copied!"; // Temporarily change the text
      // setTimeout(() => {
      //   inputRef.current.value = password; // Revert to the password
      // }, 1500);
    }
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-4 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center text-xl font-semibold mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            ref={inputRef}
            className="outline-none w-full py-2 px-3 bg-white text-orange-600"
            placeholder="password"
            readOnly
          />
          <button
            className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 shrink-0"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center gap-x-2 text-orange-700 text-sm">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer w-full"
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
          />
          <label className="text-orange-700">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={noAllowed}
            id="noAllowed"
            onChange={() => setNoAllowed((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charAllowed"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
