export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Krapsi Fun</div>
        <div className="text-white/40">Зроблено для хайпу. Без гарантій, але з вайбом.</div>
      </div>
    </footer>
  );
}
