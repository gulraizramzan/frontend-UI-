import "./App.css";
import LeftSection from "./components/LeftSection";
import MainGrid from "./components/MainGrid";
import RightSection from "./components/RightSection";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";

function App() {
  return (
    <div className="flex md:justify-center md:items-center text-blak">
      <div className="flex flex-col bg-bgGray rounded-sm drop-shadow-xl md:w-128 md:p-4 m-2">
        <div className="text-center text-[28px] mb-2 font-openSans">
          Crossword Puzzel
        </div>
        <TopSection />
        <hr className="my-2" />
        <div className="flex flex-col md:flex-row  mx-5 md:mx-0 mb-1">
          <LeftSection />

          <div className="flex flex-col mt-10 md:m-2 md:mt-0">
            <MainGrid />
            <BottomSection />
          </div>

          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
