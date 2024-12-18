import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <main
      className="position-relative overflow-x-hidden d-flex flex-column"
      style={{ height: "100dvh" }}
    >
      <Header />
      <AppRouter />
      <NavBar />
      <div className="circle-blur" />
    </main>
  );
}

export default App;
