import { Route, Routes } from "react-router-dom";
import { UseGetCurrentUser } from "./customHooks/getCurrentUser";
import { allRoutes } from "./routes/AllRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
function App() {
  UseGetCurrentUser();

  return (
    <>
      <Routes>
        {allRoutes?.map((route) => {
          return (
            <Route
              path={route?.path}
              element={
                !route?.secure ? (
                  route?.element
                ) : (
                  <ProtectedRoutes>{route?.element}</ProtectedRoutes>
                )
              }
            />
          );
        })}
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
    </>
  );
}

export default App;
