export default function Card({ suit, number }) {
  return (
    <div className="w-card bg-white h-card rounded-md shadow-md text-card-red text-6xl grid grid-cols-1 grid-rows-1 font-bold border-zinc-500 border-2 ">
      <div className="h-full flex flex-col justify-between p-2 col-start-1 row-start-1">
        <div>
          <span>7</span>
          <br />
          <span className="text-3xl -mt-2 block">♦️</span>
        </div>
        <div className="rotate-180">
          <span>7</span>
          <br />
          <span className="text-3xl -mt-2 block">♦️</span>
        </div>
      </div>
      <div className="col-start-1 row-start-1 px-12 py-10 h-full flex justify-between flex-col p-4">
        <div className="flex justify-between">
          <span>♦️</span>
          <span>♦️</span>
        </div>
        <div className="text-center -m-10">
          <span>♦️</span>
        </div>
        <div className="flex justify-between">
          <span>♦️</span>
          <span>♦️</span>
        </div>
        <div className="flex justify-between">
          <span>♦️</span>
          <span>♦️</span>
        </div>
      </div>
    </div>
  );
}
