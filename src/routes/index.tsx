import { BrowserRouter } from "react-router-dom";
import { UserRoutes } from "./user.routes";

export function Routes() {

  return (
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  );
}
