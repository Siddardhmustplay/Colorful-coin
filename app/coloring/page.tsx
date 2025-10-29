import Link from "next/link";

const items: { slug: string; title: string; src: string }[] = [
  { slug: "wizard-bunny", title: "Wizard Bunny", src: "/images/wizard-bunny.png" },
  { slug: "chef-pig", title: "Chef Pig", src: "/images/chef-pig.png" },
  { slug: "swag-sheep", title: "Swag Sheep", src: "/images/swag-sheep.png" },
  { slug: "skateboard-squirrel", title: "Skateboard Squirrel", src: "/images/skateboard-squirrel.png" },
  { slug: "cool-cat", title: "Cool Cat", src: "/images/cool-cat.png" },
  { slug: "phone-dog", title: "Phone Dog", src: "/images/phone-dog.png" },
  { slug: "magical-unicorn", title: "Magical Unicorn", src: "/images/magicalunicorn.png" },
  { slug: "muscle-mouse", title: "Muscle Mouse", src: "/images/muscle-mouse.png" },
];

export default function Page() {
  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Coloring Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <Link href={`/coloring/${it.slug}`} key={it.slug}
                  className="group rounded-xl border bg-white p-2 shadow hover:shadow-md transition">
              <div className="aspect-square overflow-hidden rounded-lg border bg-gray-50 flex items-center justify-center">
                <img src={it.src} alt={it.title} className="h-full w-full object-contain" />
              </div>
              <div className="text-center mt-2 text-sm font-semibold">{it.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
