import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <main className="position-relative overflow-x-hidden">
      <NavBar />
      <AppRouter />
      <div className="circle-blur" />
    </main>
  );
}

export default App;
