import "@/styles/globals.css";
import StarsCanvas from "@/components/main/StarBackground";

export default function App({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen">
      <StarsCanvas />
      <Component {...pageProps} />
    </div>
  );
}
