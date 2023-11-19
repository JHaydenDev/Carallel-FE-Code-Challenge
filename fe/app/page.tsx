import Body from "./components/Body";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
  // const [headerText, setHeaderText] = useState();

  return (
    <main className="overflow-auto">
      <Header />
      <Body />
      <NavBar />
    </main>
  );
}
