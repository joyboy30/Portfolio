type Props = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: Props) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {params.slug.replace(/-/g, " ")}
        </h1>

        <p className="text-gray-400">
          This category page is under construction.
        </p>
      </div>
    </main>
  );
}