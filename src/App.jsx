import BlockchainComponent from "./components/BlockChain";

function App() {
  return (
    <div className=" w-[100vw] mx-auto bg-[#001220]">
      <div className="header-container w-full h-[400px] bg-[#C62368] my-auto flex justify-center items-center flex-col">
        <h1 className="text-7xl font-bold text-center text-white animate__animated animate__zoomInDown">
          Blockchain Visualization
        </h1>
        <p className="text-2xl my-5 text-gray-200 italic animate__animated animate__fadeIn animate__delay-1s">
          An Toàn Và Bảo Mật Thông Tin
        </p>
      </div>
      <div className="layer spacer"></div>
      <h1 className="text-5xl font-bold italic text-white text-center mb-10 animate__animated animate__zoomInDown animate__delay-2s">
        Lưu Thông Tin Học Phí
      </h1>
      <section className="pb-10 animate__animated animate__zoomInDown animate__delay-2s">
        <BlockchainComponent />
      </section>
    </div>
  );
}
export default App;
