import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen mt-50">
      <section className="pt-32 pb-20 px-4">
        <Button
          size="xl"
          variant="primary"
          className="px-8 py-6 text-lg text-stone-50"
        >
          Start Cooking Free &rarr;
        </Button>
      </section>
      <section></section>
    </div>
  );
}
