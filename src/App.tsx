import "./index.css";
import { Sidebar } from "./Components/Sidebar";
import { HomeSection } from "./Components/HomeSections";
import { AboutSection } from "./Components/AboutSection";
import { ProjectsSection } from "./Components/ProjectsSection";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Components/Header";

export function App() {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="h-full flex flex-row bg-background font-display">

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Header 
        isOpen={isOpen} setIsOpen={setIsOpen}
        text="data-[state=open]:hidden sm:data-[state=closed]:p-5 data-[state=closed]:py-5 data-[state=closed]:px-1 absolute top-0 left-0"/>
      <div className="flex-1">
        
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
