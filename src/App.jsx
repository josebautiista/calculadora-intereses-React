import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";
import CardInputs from "./components/CardInputs";

function App() {
  return (
    <NextUIProvider>
      <main className="flex flex-col gap-10 items-center justify-center w-full">
        <Header />
        <CardInputs />
      </main>
    </NextUIProvider>
  );
}

export default App;
