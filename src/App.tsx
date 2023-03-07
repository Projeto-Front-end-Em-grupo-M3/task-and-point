import { GlobalStyles } from "./styles/GlobalStyles";

import { AdminContextProvider } from "./contexts/AdminContext";
import Router from "./routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <AdminContextProvider>
        <Router />
      </AdminContextProvider>
    </>
  );
}

export default App;
