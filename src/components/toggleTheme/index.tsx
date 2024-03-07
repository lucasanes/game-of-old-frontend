import { PiSunHorizonLight } from "react-icons/pi";
import { RxMoon } from "react-icons/rx";
import { useTheme } from "../../contexts/theme";
import { toggleSound } from "../sound";
import { Container, Input, Label } from "./styles";

export function ToggleTheme({ ...rest }) {
  const { theme, setTheme } = useTheme();

  function handleToggle() {
    toggleSound();
    setTheme(theme == "light" ? "dark" : "light");
    localStorage.setItem(
      "@gameofold:theme",
      theme == "light" ? "dark" : "light"
    );
  }

  return (
    <Container {...rest}>
      <Input
        defaultChecked={localStorage.getItem("@gameofold:theme") == "dark"}
        type="checkbox"
        id="darkmode-toggle"
        onChange={handleToggle}
      />
      <Label checked={theme == "dark"} htmlFor="darkmode-toggle">
        <PiSunHorizonLight
          color={theme == "light" ? "#fff" : "#7e7e7e"}
          size={24}
          version="1.1"
          className="sun"
        />
        <RxMoon
          color={theme == "dark" ? "#fff" : "#7e7e7e"}
          size={22}
          version="1.1"
          className="moon"
        />
      </Label>
    </Container>
  );
}
