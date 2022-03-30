import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/Router";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
