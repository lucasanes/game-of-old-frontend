import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Local } from "../pages/local";
import { NotFound } from "../pages/notFound";
import { Room } from "../pages/room";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/local" element={<Local />} />
      <Route path="/room/:id" element={<Room />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
