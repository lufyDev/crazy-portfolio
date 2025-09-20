import "@/styles/globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import NavBar from "@/components/main/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen">
      <StarsCanvas />
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
