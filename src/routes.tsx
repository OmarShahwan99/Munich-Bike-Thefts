import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Bikes from "./pages/bikes";
import Bike from "./pages/bike";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/bikes" />} />
        <Route index path="/bikes" element={<Bikes />} />
        <Route index path="/bikes/:id" element={<Bike />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
