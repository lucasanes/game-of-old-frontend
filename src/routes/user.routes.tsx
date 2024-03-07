import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Game } from "../pages/game";
import { NotFound } from "../pages/notFound";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/room/:id" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
