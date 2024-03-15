import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(true);

  const paswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

useEffect( ()=>{
  paswordGenerator()
}, [length, numberAllow, charAllow, paswordGenerator])

let passwordRef =useRef(null);

const handleCopyToClipboard =useCallback(()=> {
  setClicked(!clicked)
  passwordRef.current.select()
  window.navigator.clipboard.writeText(password)
}, [password])

  return (
    <div className="container p-40">
      <div className="row">
        <div className=" bg-dark text-center col-8 mt-5 py-5 rounded-lg mx-auto">
          <h1 className="text-white text-4xl mb-4 pb-2">Password Generator</h1>
          <div className="bg-dark d-flex justify-content-center rounded-2 mx-auto ">
            <input
              type="text"
              className=" py-2 px-3 rounded-start w-50 fs-3 outline-none"
              value={password}
              ref={passwordRef}
              readOnly
              placeholder="Password"
            />
            <button id="copy" onClick={handleCopyToClipboard} className="text-light fw-semibold px-3 fs-3 rounded-end w-40" style={{backgroundColor: clicked?"#1480B8":"#547Ff9" , transition: "ease-in-out 0.5s"}}>
              Copy
            </button>
          </div>
          <div className="row d-flex justify-content-center mt-4 ">
          
            <div className="col-8">
              <input
                type="range"
                min={6}
                max={20}
                className=""
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="text-orange-400 fs-5 mx-3 me-4">
                Length: {length}
              </label>
           
              <input
                type="checkbox"
                className=""
                value={numberAllow}
                id="number"
                onChange={(e) => setNumberAllow((prev)  => (!prev))}
              />
              <label htmlFor="number" className="text-orange-400 fs-5 mx-2 me-4">
                Number
              </label>

              <input
                type="checkbox"
                className=""
                value={charAllow}
                id="character"
                onChange={(e) => setCharAllow((prev)  => (!prev))}
              />
              <label htmlFor="character" className="text-orange-400 mx-2 fs-5 ">
                Character
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
