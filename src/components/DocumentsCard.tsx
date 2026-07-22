type DocumentsCardProps = {
  documents: string[];
};

export default function DocumentsCard({
  documents,
}: DocumentsCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        📄 Required Documents
      </h2>

      <div className="space-y-4">
        {documents.map((document) => (
          <div
            key={document}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            <span className="text-xl">
              📑
            </span>

            <span className="font-medium text-slate-700 dark:text-slate-200">
              {document}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}