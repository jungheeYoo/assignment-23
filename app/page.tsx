export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5">
      <div className="max-w-screen-sm rounded-3xl bg-yellow-300 p-5 px-8 shadow-xl">
        <div className="pt-72">
          <div className="text-xl font-bold">Select Destination</div>
          <div className="relative">
            <div className="absolute h-0.5 w-full bg-black" />
          </div>
        </div>

        <div className="pt-3 text-5xl font-bold">
          <div className="group my-2 flex items-center gap-2">
            <span className="rounded-full bg-black px-3.5 py-1.5 text-sm font-medium text-yellow-300 transition hover:bg-white group-hover:bg-white">
              V
            </span>
            <span className="pb-3 transition hover:text-white group-hover:text-white">
              Vancouver
            </span>
          </div>
          <div className="group my-2 flex items-center gap-2">
            <span className="rounded-full bg-black px-3.5 py-1.5 pb-3 text-sm font-medium text-yellow-300 transition hover:bg-white group-hover:bg-white">
              S
            </span>
            <span className="pb-3 transition hover:text-white group-hover:text-white">
              Seattle
            </span>
          </div>
          <div className="group my-2 flex items-center gap-2">
            <span className="rounded-full bg-black px-3.5 py-1.5 pb-3 text-sm font-medium text-yellow-300 transition hover:bg-white group-hover:bg-white">
              P
            </span>
            <span className="pb-3 transition hover:text-white group-hover:text-white">
              Portland
            </span>
          </div>
          <div className="group my-2 flex items-center gap-2">
            <span className="rounded-full bg-black px-3.5 py-1.5 pb-3 text-sm font-medium text-yellow-300 transition hover:bg-white group-hover:bg-white">
              S
            </span>
            <span className="pb-3 transition hover:text-white group-hover:text-white">
              Seattle
            </span>
          </div>
          <div className="group my-2 flex items-center gap-2">
            <span className="rounded-full bg-black px-3.5 py-1.5 pb-3 text-sm font-medium text-yellow-300 transition hover:bg-white group-hover:bg-white">
              S
            </span>
            <span className="pb-3 transition hover:text-white group-hover:text-white">
              San Francisco
            </span>
          </div>
          <div className="group my-2 flex items-center gap-2">
            <span className="rounded-full bg-black px-3.5 py-1.5 pb-3 text-sm font-medium text-yellow-300 transition hover:bg-white group-hover:bg-white">
              L
            </span>
            <span className="pb-3 transition hover:text-white group-hover:text-white">
              Los Angeles
            </span>
          </div>
          <div className="group my-2 flex items-center gap-2">
            <span className="rounded-full bg-black px-3.5 py-1.5 pb-3 text-sm font-medium text-yellow-300 transition hover:bg-white group-hover:bg-white">
              S
            </span>
            <span className="pb-3 transition hover:text-white group-hover:text-white">
              San Diego
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

// ---------------------------------------------------------
// solution
<div className="flex h-screen w-full items-center justify-center bg-gray-50">
  <div className="w-full max-w-xs rounded-xl bg-yellow-300 px-5 pb-5">
    <div className="pt-60"></div>
    <div className="mb-5 border-b-2 border-black">
      <span className="text-xs font-semibold">Select Destination</span>
    </div>
    <div className="mb-1 flex items-center hover:text-white">
      <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">
        V
      </div>
      <span className="text-3xl font-semibold">Vancouver</span>
    </div>
    <div className="mb-1 flex items-center hover:text-white">
      <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">
        S
      </div>
      <span className="text-3xl font-semibold">Seattle</span>
    </div>
    <div className="mb-1 flex items-center hover:text-white">
      <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">
        P
      </div>
      <span className="text-3xl font-semibold">Portland</span>
    </div>
    <div className="mb-1 flex items-center hover:text-white">
      <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">
        S
      </div>
      <span className="text-3xl font-semibold">San Francisco</span>
    </div>
    <div className="mb-1 flex items-center hover:text-white">
      <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">
        L
      </div>
      <span className="text-3xl font-semibold">Los Angeles</span>
    </div>
    <div className="mb-1 flex items-center hover:text-white">
      <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">
        S
      </div>
      <span className="text-3xl font-semibold">San Diego</span>
    </div>
  </div>
</div>;
