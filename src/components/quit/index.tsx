import { IoEnterOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { buttonSound } from "../sound";
import { Button, Container } from "./styles";

export function Quit({ ...rest }) {
  const navigate = useNavigate();

  function handleToggle() {
    buttonSound();
    navigate("/");
  }

  return (
    <Container {...rest}>
      <Button onClick={handleToggle}>
        <IoEnterOutline size={40} />
      </Button>
    </Container>
  );
}
