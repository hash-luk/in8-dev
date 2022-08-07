import DataTable from "./components/Data-Table";
import Footer from "./components/Footer";
import MainContent from "./components/Main-Content";
import Registration from "./components/Registration";

export default function App() {
  return (
    <div className="App">
      <MainContent />
      <Registration />
      <DataTable />
      <Footer />
    </div>
  );
}
