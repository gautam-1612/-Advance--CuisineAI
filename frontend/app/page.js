import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen mt-50">
      <section className="">
        <span className="rounded-full border-2 border-[#6c47ff] font-semibold text-[#6c47ff] bg-[#e5e1f7] text-sm px-4 py-1">
          #1 AI COOKING ASSISTANT
        </span>
        <h2 className="text-8xl font-bold">
          Turn your{" "}
          <span className=" pb-0 mb-0 border-b-2 border-[#6c47ff] italic ">
            leftovers
          </span>{" "}
          into masterpieces.
        </h2>
        <p className="font-light text-stone-700 text-m">
          Snap a photo of your fridge. We will tell you what to cook. Save
          money, reduce waste and eat better.
        </p>
      </section>
      <section></section>
    </div>
  );
}
