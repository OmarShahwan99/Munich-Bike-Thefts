import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Bikes from "./pages/bikes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/bikes" />} />
        <Route index path="/bikes" element={<Bikes />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
