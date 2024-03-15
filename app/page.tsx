import Introduce from "./components/organisms/introduce";
import Vision from "./components/organisms/vision";
import Nft from "./components/organisms/nft";

export default function Home() {
  return (
    <div className="bg-black">
      <Introduce />
      <Vision />
      <Nft />
    </div>
  );
}
