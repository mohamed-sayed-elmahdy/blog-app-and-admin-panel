"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { MdContentCopy } from "react-icons/md";
import { oneDark, coldarkDark ,funky, duotoneDark, a11yDark, vscDarkPlus, synthwave84, materialDark, nord, shadesOfPurple, solarizedDarkAtom, darcula} from "react-syntax-highlighter/dist/esm/styles/prism";
import { IoIosColorPalette } from "react-icons/io";

export default function CodeBlock({ language, value, theme }) {
    const [themes, setThemes] = useState([funky, oneDark, coldarkDark, duotoneDark, a11yDark, vscDarkPlus, synthwave84, nord, shadesOfPurple, solarizedDarkAtom, darcula]);
    const [themeIndex, setThemeIndex] = useState(0);

    const handleThemeChange = () => {
     setThemeIndex(themeIndex + 1);
     if(themeIndex === themes.length - 1) {
      setThemeIndex(0);
     }
    };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    alert("Copied!");
  };

  return (
    <div className="relative my-4">
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 bg-gray-700 text-white px-2 py-1 text-sm rounded"
      >
        <MdContentCopy />
      </button>
      <button
        onClick={handleThemeChange}
        className="absolute right-12 top-2 bg-gray-700 text-white px-2 py-1 text-sm rounded"
      >
        <IoIosColorPalette />
      </button>
      <SyntaxHighlighter
        style={themes[themeIndex]}
        language={language}
        showLineNumbers
        PreTag="div"
        className={`!rounded-xl border border-gray-800 !p-3 !text-base`}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
}
