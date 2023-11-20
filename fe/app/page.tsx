import LoginPage from "./login/page";

export default function Home() {
  return (
    <main style={{ height: "100vh" }} className="h-full overflow-auto">
      <LoginPage />
    </main>
  );
}
