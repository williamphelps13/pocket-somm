import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../hooks";

const Header = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="flex flex-col items-center space-y-4">
      <h1 className="text-3xl sm:text-4xl">Pocket Somm</h1>
      <p className="text-base sm:text-lg">
        Select the tasting notes that fit your mood and discover the varietals
        that match it.
      </p>
      <button className="link absolute right-2 top-2" onClick={toggleTheme}>
        {theme === "light" ? (
          <MoonIcon className="size-8 lg:size-12" />
        ) : (
          <SunIcon className="size-8 lg:size-12" />
        )}
      </button>
    </header>
  );
};

export default Header;
