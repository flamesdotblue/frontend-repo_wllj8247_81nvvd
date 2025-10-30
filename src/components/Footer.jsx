export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200/70 bg-white py-8 sm:mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} HireHUB. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
