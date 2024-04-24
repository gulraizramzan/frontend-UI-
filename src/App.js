import "./App.css";
import LeftSection from "./components/LeftSection";

import MainGrid from "./components/MainGrid";
import RightSection from "./components/RightSection";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";
function App() {
  return (
    <div className="flex md:justify-center md:items-center text-blak mb-36">
      <div className="flex flex-col bg-bgGray  md:w-128 md:p-5">
        <div className="text-center font-bold mb-5">Kreuzworträtsel</div>
        <TopSection />
        <hr className="my-2" />
        <div className="flex flex-col md:flex-row mt-5 mx-5 md:mx-0 mb-10">
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
