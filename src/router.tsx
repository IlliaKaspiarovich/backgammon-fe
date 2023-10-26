import { createBrowserRouter } from "react-router-dom";
import { paths } from "./constants/paths";
import { HomePage } from "./pages/home";

export const router = createBrowserRouter([
  {
    path: paths.HOME,
    element: <HomePage />,
  },
  {
    path: paths.CREATE_GAME,
    element: <div>Create new game</div>,
  },
  {
    path: paths.JOIN_GAME,
    element: <div>Join game</div>,
  },
]);