import React from "react";
import styles from "./BarCode.module.css";

const BoardingPass = () => {
  return (
    <div className="flex flex-col md:flex-row md:px-12 px-2 py-8 md:py-24 justify-between min-h-[40vh] bg-gray-200 relative bg-center bg-cover">
      <div className="w-full md:w-1/2 md:pt-12">
        <h1 className="text-2xl font-bold md:text-5xl">
          Book Ticket & Get Boarding Pass on the Go
        </h1>
        <p className="py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          magni suscipit praesentium nesciunt blanditiis ipsum? Dolorem cum
          voluptatem ex aliquid inventore perferendis exercitationem. Omnis
          perspiciatis eum, praesentium quaerat dolor repellendus excepturi,
          porro, velit distinctio soluta similique ipsa eligendi non vel.
        </p>
        <button className="flex items-center justify-center px-6 py-3 mb-8 text-sm text-white rounded-lg md:mb-0 bg-sky-500 lg:mt-5 hover:bg-sky-600 focus:bg-sky-600 focus:outline-none">
          Get Boarding Pass
        </button>
      </div>
      <div className="absolute inset-0 z-0 opacity-80" />
      <div className="z-10 w-full max-w-sm mx-auto h-1/4 bg-sky-900 rounded-3xl">
        <div className="flex flex-col ">
          <div className="relative p-4 m-4 bg-white drop-shadow-2xl rounded-3xl">
            <div className="flex-none sm:flex">
              <div className="flex-auto justify-evenly">
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <span className="w-24 h-8 mr-3 bg-white rounded-full">
                      <img src="/images/delta-full.png" className="h-8 p-1" />
                    </span>
                    <h2 className="font-medium">DELTA AIRLINE</h2>
                  </div>
                  <div className="ml-auto text-sky-800">A380</div>
                </div>
                <div className="my-5 border-b-2 border-dashed " />
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="flex-auto my-1 text-xs text-gray-400">
                      <span className="mr-1 ">MO</span>
                      <span>19 22</span>
                    </div>
                    <div className="flex-none w-full text-lg font-bold leading-none text-sky-800">
                      NYC
                    </div>
                    <div className="text-xs">New York City</div>
                  </div>
                  <div className="flex flex-col mx-auto">
                    <img src="/images/delta.png" className="w-20 p-1" />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex-auto my-1 text-xs text-gray-400">
                      <span className="mr-1">MO</span>
                      <span>19 22</span>
                    </div>
                    <div className="flex-none w-full text-lg font-bold leading-none text-sky-800">
                      SEA
                    </div>
                    <div className="text-xs">Seattle</div>
                  </div>
                </div>
                <div className="pt-5 my-5 border-b-2 border-dashed ">
                  <div className="absolute w-5 h-5 -mt-2 rounded-full bg-sky-900 -left-2" />
                  <div className="absolute w-5 h-5 -mt-2 rounded-full bg-sky-900 -right-2" />
                </div>
                <div className="flex items-center p-5 mb-5 text-sm">
                  <div className="flex flex-col">
                    <span className="text-sm">Flight</span>
                    <div className="font-semibold">Airbus380</div>
                  </div>
                  <div className="flex flex-col ml-auto">
                    <span className="text-sm">Gate</span>
                    <div className="font-semibold">B3</div>
                  </div>
                </div>
                <div className="flex items-center px-5 mb-4">
                  <div className="flex flex-col text-sm">
                    <span className>Board</span>
                    <div className="font-semibold">11:50 AM</div>
                  </div>
                  <div className="flex flex-col mx-auto text-sm">
                    <span className>Departs</span>
                    <div className="font-semibold">11:30 AM</div>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className>Arrived</span>
                    <div className="font-semibold">2:00 PM</div>
                  </div>
                </div>
                <div className="pt-5 my-5 border-b-2 border-dashed ">
                  <div className="absolute w-5 h-5 -mt-2 rounded-full bg-sky-900 -left-2" />
                  <div className="absolute w-5 h-5 -mt-2 rounded-full bg-sky-900 -right-2" />
                </div>
                <div className="flex items-center px-5 pt-3 text-sm">
                  <div className="flex flex-col">
                    <span className>Passanger</span>
                    <div className="font-semibold">Wilson Ferro</div>
                  </div>
                  <div className="flex flex-col mx-auto">
                    <span className>Class</span>
                    <div className="font-semibold">Economic</div>
                  </div>
                  <div className="flex flex-col">
                    <span className>Seat</span>
                    <div className="font-semibold">12 E</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-5 text-sm ">
                  <h6 className="font-bold text-center">Boarding Pass</h6>
                  <div
                    className={`${styles.barcode} h-14 w-0 inline-block mt-4 relative left-auto`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingPass;
