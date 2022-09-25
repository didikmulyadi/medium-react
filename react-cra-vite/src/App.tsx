import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Uncomment this for no lazy load
// import BigComponent from "./pages/BigComponent";
// import BigComponent2 from "./pages/BigComponent2";
// import BigComponent3 from "./pages/BigComponent3";
// import BigComponent4 from "./pages/BigComponent4";
// import BigComponent5 from "./pages/BigComponent5";
// import BigComponent6 from "./pages/BigComponent6";
// import SplittingComponent from "./pages/SplittingComponent";
// import SplittingComponentNoLazyLoad from "./pages/SplittingComponentNoLazyLoad";

// Uncomment this for lazy load
const BigComponent = lazy(() => import("./pages/BigComponent"));
const BigComponent2 = lazy(() => import("./pages/BigComponent2"));
const BigComponent3 = lazy(() => import("./pages/BigComponent3"));
const BigComponent4 = lazy(() => import("./pages/BigComponent4"));
const BigComponent5 = lazy(() => import("./pages/BigComponent5"));
const BigComponent6 = lazy(() => import("./pages/BigComponent6"));
const SplittingComponent = lazy(() => import("./pages/SplittingComponent"));
const SplittingComponentNoLazyLoad = lazy(
  () => import("./pages/SplittingComponentNoLazyLoad")
);

function App() {
  return (
    <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path="/" element={<BigComponent />} />
        <Route path="/big-component-2" element={<BigComponent2 />} />
        <Route path="/big-component-3" element={<BigComponent3 />} />
        <Route path="/big-component-4" element={<BigComponent4 />} />
        <Route path="/big-component-5" element={<BigComponent5 />} />
        <Route path="/big-component-6" element={<BigComponent6 />} />
        <Route
          path="/splitting-component-lazy-load"
          element={<SplittingComponent />}
        />
        <Route
          path="/splitting-component-no-lazy-load"
          element={<SplittingComponentNoLazyLoad />}
        />
      </Routes>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
