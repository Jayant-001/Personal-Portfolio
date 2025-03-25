import { useState } from "react";
import TerminalTheme from "../themes/TerminalTheme";
import CyberTheme from "../themes/CyberTheme";
import FuturisticTheme from "../themes/FuturisticTheme";
import MatrixTheme from "../themes/MatrixTheme";

const ThemePage: React.FC = () => {
    const [currentTheme, setCurrentTheme] = useState(0);
    const themes = [
        { component: TerminalTheme, name: "Terminal Theme" },
        { component: CyberTheme, name: "Cyber Theme" },
        { component: FuturisticTheme, name: "Futuristic Theme" },
        { component: MatrixTheme, name: "Matrix Theme" },
    ];

    const CurrentThemeComponent = themes[currentTheme].component;

    return (
        <div>
            <div className="fixed top-4 right-4 z-50 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex flex-col gap-2">
                    {themes.map((theme, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTheme(index)}
                            className={`px-4 py-2 rounded ${
                                currentTheme === index
                                    ? "bg-purple-600 text-white"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            } transition-colors`}
                        >
                            {theme.name}
                        </button>
                    ))}
                </div>
            </div>
            <CurrentThemeComponent />
        </div>
    );
};

export default ThemePage;
