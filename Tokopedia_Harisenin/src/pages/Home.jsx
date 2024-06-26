import React from "react";
import Gambar7 from "../assets/img/7.png";
import GambarAndroid from "../assets/img/100x100/Android.png";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import KategoriCard from "../components/HomeComponent/KategoriCard";
import KategoriBottomCard from "../components/HomeComponent/KategoriBottomCard";
import TrendingItemCard from "../components/HomeComponent/TrendingItemCard";
import CardProduct from "../components/HomeComponent/CardProduct";
import Slider1 from "../assets/img/slide/4.png";

const Home = () => {
  return (
    <div className="home m-0 p-0 h-full min-w-min">
      <Header />
      <div className="mainHomePage relative block w-full min-h-screen top-40 mt-0 mr-auto mb-64 ml-0">
        <div className="mainContent flex w-1208px my-0 mx-auto flex-1">
          <div className="containerSlider py-6 px-0 relative w-full h-auto min-h-60">
            <div className="sliderContent w-1208px h-80">
              <img
                className="w-1208px h-80 border-none rounded-xl"
                src={Slider1}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mainContent block w-1208px my-0 mx-auto">
          <div className="containerKategori block relative shadow bg-white p-4 mb-6 rounded">
            <div className="containerKategoriTop mb-6 relative flex flex-row">
              <div className="kategori block relative min-h-52 w-1/2 mr-2 box-border border-r-2 border-solid border-borderColor">
                <div className="kategoriHeader relative flex min-h-8 mb-4 items-baseline">
                  <div className="kategoriJudul flex flex-row items-baseline">
                    <h2 className="font-bold">Kategori Pilihan</h2>
                  </div>
                </div>
                <div className="kategoriContent relative block">
                  <div className="kategoriBorder relative">
                    <div className="kategoriCard flex flex-wrap justify-around">
                      <KategoriCard />
                      <KategoriCard />
                      <KategoriCard />
                      <KategoriCard />
                    </div>
                  </div>
                </div>
              </div>
              <div className="topUp block relative min-h-52 w-1/2 ml-2 box-border">
                <div className="topUpHeader relative flex min-h-8 mb-4 items-baseline">
                  <div className="topUpJudul flex flex-row items-baseline">
                    <h2 className="flex relative">Top Up & Tagihan</h2>
                  </div>
                </div>
                <div className="topUpContent block relative w-full border-solid border border-[#f0f3f7] rounded bg-white">
                  <div className="topUpPilihan flex relative">
                    <div className="pilihanKiri flex relative justify-around items-center w-full border-b-2 border-solid border-b-[#030b1f] border-r-[#6d7588]">
                      <div className="pilihan ">
                        <button
                          className="border-none text-2xl font-semibold flex items-center text-center h-10 bg-white py-0 px-6"
                          type="button"
                        >
                          Pulsa
                        </button>
                      </div>
                      <div className="pilihan">
                        <button
                          className="border-none text-2xl font-semibold flex items-center text-center h-10 bg-white py-0 px-6"
                          type="button"
                        >
                          Pulsa
                        </button>
                      </div>
                      <div className="pilihan">
                        <button
                          className="border-none text-2xl font-semibold flex items-center text-center h-10 bg-white py-0 px-6"
                          type="button"
                        >
                          Pulsa
                        </button>
                      </div>
                    </div>
                    <div className="pilihanKanan w-14 flex justify-center items-center border-b-2 border-solid border-[#6d7588]">
                      <button
                        className="pilihan border-none text-2xl font-semibold flex items-center text-center h-10 bg-white py-0 px-6"
                        type=""
                      >
                        icon
                      </button>
                    </div>
                  </div>
                  <div className="topUpNominal flex relative min-h-24">
                    <div className="topUpContainer relative flex justify-around grow-1 shrink basis-auto flex-row w-full p-1.5 min-w-0">
                      <div className="label flex flex-col justify-center p-1.5">
                        <label
                          htmlFor="nomor"
                          className="nomorTelepon text-xs font-bold leading-5 inline-block pointer-events-none text-[#6d7588] mb-1 truncate whitespace-nowrap "
                        >
                          Nomor Telepon
                        </label>
                        <div className="labelContainer m-0 relative">
                          <div className="labelInput h-10 rounded bg-white border border-solid border-[#e5e7e9] p-1">
                            <input
                              className="items-center h-full border-none pl-1"
                              type="number"
                              placeholder="Nomor Telepon"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="label flex flex-col justify-center p-1.5">
                        <label
                          htmlFor="nominal"
                          className="nominalTopUp text-xs font-bold leading-5 inline-block pointer-events-none text-[#6d7588] mb-1 truncate whitespace-nowrap "
                        >
                          Nominal
                        </label>
                        <div className="labelContainer m-0 relative">
                          <div className="labelInput h-10 rounded bg-white border border-solid border-[#e5e7e9] p-1">
                            <input
                              className="items-center h-full border-none pl-1"
                              type="number"
                              placeholder="Nominal"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="label flex flex-col justify-center p-1.5">
                        <div className="topUpButton w-full h-full flex justify-center items-end py-1 px-0">
                          <button
                            type="button"
                            className="buttonConfirmation bg-[#03ac0e] text-[white] flex items-center h-10 text-sm font-bold rounded border border-solid border-[black] leading-6 outline-none relative py-0 px-4"
                          >
                            Beli
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="containerKategoriBottom block mt-3">
              <div className="kategoriBottom flex flex-row flex-nowrap justify-around items-center h-10">
                <KategoriBottomCard />
                <KategoriBottomCard />
                <KategoriBottomCard />
                <KategoriBottomCard />
                <KategoriBottomCard />
                <KategoriBottomCard />
                <KategoriBottomCard />
              </div>
            </div>
          </div>
          <div className="maincontent block w-1208px my-0 mx-auto">
            <div className="trendingItem block my-6 mx-0 rounded-2xl shadow border border-solid border-[#e5e7e9]">
              <div className="trendingItemTop flex my-5 mx-3">
                <div className="trendingJudul font-black">
                  <h2>Trending Item</h2>
                </div>
              </div>
              <div className="trendingItemBottom flex my-0 mx-3">
                <div className="trendingItemContainer flex flex-wrap justify-between items-center w-full my-5 mx-3">
                  <TrendingItemCard />
                  <TrendingItemCard />
                  <TrendingItemCard />
                  <TrendingItemCard />
                  <TrendingItemCard />
                  <TrendingItemCard />
                  <TrendingItemCard />
                  <TrendingItemCard />
                </div>
              </div>
            </div>
          </div>
          <div className="maincontent block w-1208px my-0 mx-auto">
            <div className="productItem flex flex-wrap items-center content-center justify-start">
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
