import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { About } from "./pages/About";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { Insights } from "./pages/Insights";
import { AIMLComputerVisionList } from "./pages/AIMLComputerVisionList";
import { NewsList } from "./pages/NewsList";
import { Home } from "./pages/Home";
import DigitalEngineeringService from "./pages/DigitalEngineeringService";
import { DigitalEngineeringServiceList } from "./pages/DigitalEngineeringServiceList";
import Industry from "./pages/Industry";
import AIMLComputerVisionDetail from "./pages/AIMLComputerVisionDetail";
import { AIDataServicesList } from "./pages/AIDataServicesList";
import DataAnnotationDetail from "./pages/DataAnnotationDetail";
import DataCollectionDetail from "./pages/DataCollectionDetail";
import DataAnonymizationDetail from "./pages/DataAnonymizationDetail";
import { ElectronicsEmbededList } from "./pages/ElectronicsEmbededList";
import ElectronicsEmbededDetail from "./pages/ElectronicsEmbededDetail";
import SapServiceDetail from "./pages/SapServiceDetail";
import { SapServiceList } from "./pages/SapServiceList";
import { CloudServiceList } from "./pages/CloudServiceList";
import CloudServiceDetail from "./pages/CloudServiceDetail";
import { NewsDetail } from "./pages/NewsDetail";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />

          <Route
            path="/DigitalEngineeringServiceList"
            element={<DigitalEngineeringServiceList />}
          />
          <Route
            path="/DigitalEngineeringService"
            element={<DigitalEngineeringService />}
          />
          <Route path="/NewsList" element={<NewsList />} />
          <Route
            path="/AIMLComputerVisionList"
            element={<AIMLComputerVisionList />}
          />
          <Route
            path="/AIMLComputerVisionDetail"
            element={<AIMLComputerVisionDetail />}
          />
          <Route path="/AIDataServicesList" element={<AIDataServicesList />} />
          <Route
            path="/DataAnnotationDetail"
            element={<DataAnnotationDetail />}
          />
          <Route
            path="/DataCollectionDetail"
            element={<DataCollectionDetail />}
          />
          <Route
            path="/DataAnonymizationDetail"
            element={<DataAnonymizationDetail />}
          />
          <Route
            path="/ElectronicsEmbededList"
            element={<ElectronicsEmbededList />}
          />
          <Route
            path="/ElectronicsEmbededDetail"
            element={<ElectronicsEmbededDetail />}
          />
          <Route path="/CloudServiceList" element={<CloudServiceList />} />
          <Route path="/CloudServiceDetail" element={<CloudServiceDetail />} />
          <Route path="/SapServiceList" element={<SapServiceList />} />
          <Route path="/SapServiceDetail" element={<SapServiceDetail />} />
          <Route path="/Industry" element={<Industry />} />
          <Route path="/Insights" element={<Insights />} />
          <Route path="/News" element={<NewsList />} />
          <Route path="/NewsDetail" element={<NewsDetail />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
library.add(fab, fas, far);
