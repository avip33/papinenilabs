import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background flex flex-col">
      <div className="w-full max-w-[1200px] mx-auto flex-1 flex flex-col">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}