export function Footer() {
    return (
      <footer className="w-full py-8 mt-auto">
        <div className="px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Papineni Labs LLC
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Contact
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }