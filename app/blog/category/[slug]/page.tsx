interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 capitalize">
          {slug.replace(/-/g, " ")}
        </h1>

        <p className="text-gray-400">
          This category page is under construction.
        </p>
      </div>
    </main>
  );
}