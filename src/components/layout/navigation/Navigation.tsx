import Link from 'next/link';

export const Navigation = () => {
  return (
    <div className="w-full sticky top-0 z-50 bg-white-muted">
      <nav className="h-[50px] max-w-6xl mx-auto flex items-center justify-between px-5">
        <h1 className="flex items-center text-sm font-semibold text-gray-800">
          <Link href="/">hyupee</Link>
        </h1>
        <div>
          <ul className="text-xs flex gap-8 text-gray-600">
            <li>
              <Link href="/blog" title="블로그">
                블로그
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
