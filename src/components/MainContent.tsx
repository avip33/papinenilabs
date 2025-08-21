export function MainContent() {
    return (
      <main className="flex-1 px-6 py-12 flex flex-col justify-center">
        <div className="max-w-2xl">
          <p className="text-lg mb-8 text-muted-foreground">
            Papineni Labs is a technology company that builds innovative mobile and web applications. 
            We focus on creating simple, useful tools that make everyday tasks easier.
          </p>
          
          <div className="space-y-6">
            <h2 className="text-xl font-medium">Our Products</h2>
            
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Xplit</h3>
                <p className="text-muted-foreground">
                  A simple expense splitting app that helps you track shared costs with friends and family.
                </p>
                <a 
                  href="https://xplit.app" 
                  className="text-primary hover:underline inline-block mt-2"
                >
                  Learn more about Xplit →
                </a>
              </div>
              
              <div className="border-l-2 border-gray-700 pl-4">
                <h3 className="font-medium text-muted-foreground">More products coming soon</h3>
                <p className="text-muted-foreground">
                  We're working on additional apps to help simplify your digital life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }