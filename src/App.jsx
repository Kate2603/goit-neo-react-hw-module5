import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import routes from "./routes";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <Router>
        <div className={styles.searchContainer}>
          <Navigation />
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ path, element, children }) => (
              <Route key={path} path={path} element={element}>
                {children &&
                  children.map((child) => (
                    <Route
                      key={child.path}
                      path={child.path}
                      element={child.element}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
