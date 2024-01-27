import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/layout/AppLayout";
import FilesPage from "./pages/FilesPage";
import UploadPage from "./pages/UploadPage";
import ProtectedRoute from "./ui/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="files" />} />
          <Route path="files" element={<FilesPage />} />
          <Route path="upload" element={<UploadPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
