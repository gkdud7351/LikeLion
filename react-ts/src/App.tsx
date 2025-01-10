import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Login from "./pages/login";
import Page from "./pages/page";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Page />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
