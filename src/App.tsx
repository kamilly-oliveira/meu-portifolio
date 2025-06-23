import "./index.css";
import { Sidebar } from "./Components/Sidebar";
import { HomeSection } from "./Components/HomeSections";
import { AboutSection } from "./Components/AboutSection";
import { ProjectsSection } from "./Components/ProjectsSection";
import { TimelineSection } from "./Components/TimelineSection";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div className="h-full flex flex-row bg-background">
      <Sidebar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeSection/>
            </>
          }
        />
        <Route path="/aboutsection" element={
          <>
          <AboutSection />
          </>
          } />

        <Route path="/projetos" element={
          <>
          <ProjectsSection />
          </>
          } />

           <Route path="/timeline" element={
          <>
          <TimelineSection />
          </>
          } />
      </Routes>
    </div>
  );
}