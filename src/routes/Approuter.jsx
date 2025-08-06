import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Applayout from "../layouts/Applayout";
import Authentication from "../components/auth/Authentication";
import Subscription from "../components/ui/Subscription";

export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/auth" element={<Authentication />} />
          <Route path="/" element={<Index />} />
          <Route path="/subscribe" element={<Subscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
