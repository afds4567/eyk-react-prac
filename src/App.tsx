import List from "./components/List";
import Map from "./components/Map";

const App = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-4">
          <List />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Map />
        </div>
      </div>
    </>
  );
};
export default App;
