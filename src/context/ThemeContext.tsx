import React, { ReactElement, createContext, useContext, useState } from "react";

type AVAILABLE_THEMES = "light" | "dark";

interface IThemeContext {
	theme: AVAILABLE_THEMES;
	setTheme: (theme: AVAILABLE_THEMES) => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useThemeContext must be used within a ThemeContextProvider");
	}
	return context;
};

export const ThemeContextProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
	const [theme, setTheme] = useState<AVAILABLE_THEMES>("light");

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
