import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="flex justify-between p-5 bg-gray-800 dark:bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Asif</h1>
      <ul className="flex space-x-5">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 bg-gray-700 rounded-full"
      >
        {mounted && (theme === "dark" ? <FaSun /> : <FaMoon />)}
      </button>
    </nav>
  );
}
