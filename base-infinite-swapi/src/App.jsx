import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { InfinitePeople } from "./people/InfinitePeople";
import { InfiniteSpecies } from "./species/InfiniteSpecies";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [tab, setTab] = useState("People");
  const newTab = tab === "People" ? "Species" : "People";
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        <button className="btn-change" onClick={() => setTab(newTab)}>
          Change to {newTab}
        </button>
        {tab === "People" ? <InfinitePeople /> : <InfiniteSpecies />}
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;
