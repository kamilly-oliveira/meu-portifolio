import "./index.css";
import { Sidebar } from "./Components/Sidebar";
import { HomeSection } from "./Components/HomeSections";
import { AboutSection } from "./Components/AboutSection";
import { ProjectsSection } from "./Components/ProjectsSection";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";

export function App() {
  return (
    <div className="h-full flex flex-row bg-background">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeSection />
              </>
            }
          />
          <Route
            path="/aboutsection"
            element={
              <>
                <AboutSection />
              </>
            }
          />

          <Route
            path="/projetos"
            element={
              <>
                <ProjectsSection />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
