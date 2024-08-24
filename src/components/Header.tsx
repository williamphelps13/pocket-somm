import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../hooks";

const Header = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <header>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl sm:text-4xl">Pocket Somm</h1>
        <p className="text-base sm:text-lg">
          Select the tasting notes that fit your mood and discover the varietals
          that match it.
        </p>
      </div>
      <button
        className="link absolute right-2 top-2 sm:right-4 sm:top-4"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <MoonIcon className="size-8 sm:size-12" />
        ) : (
          <SunIcon className="size-8 sm:size-12" />
        )}
      </button>
    </header>
  );
};

export default Header;
