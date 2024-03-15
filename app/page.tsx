import Introduce from "./components/organisms/introduce";
import Vision from "./components/organisms/vision";
import Nft from "./components/organisms/nft";
import RoadMap from "./components/organisms/roadmap";

export default function Home() {
  return (
    <div className="bg-black">
      <Introduce />
      <Vision />
      <Nft />
      <RoadMap />
    </div>
  );
}
