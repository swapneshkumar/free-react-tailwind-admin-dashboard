import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import Login from "./pages/Login";
import Report from "./pages/Report";


export default function App() {
  return (
    <>


      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>

            <Route path="/home" element={<ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
             <Route path="/report" element={<ProtectedRoute>
              <Report />
            </ProtectedRoute>} />


          </Route>

          {/* Auth Layout */}
          <Route index path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
