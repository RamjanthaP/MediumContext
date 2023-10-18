import { Button } from "@/components/Button";
import { Jumbotron } from "@/components/Jumbotron";
import Image from "next/image";

const JumbotronPage = () => {
  return (
    <div className="">
      <Jumbotron
        title="Vi vill göra upphandling till en förvånande enkel process"
        imageUrl={`/hero-images/shape_40.png`}
      >
        <p className="mb-2">
          Har ni börjat titta på uppdhandlingar och funderat på att bygga det
          internt pga krånglet med kravställning?
        </p>
      </Jumbotron>

      <Jumbotron
        variant="content-right"
        title="Vi vill göra upphandling till en förvånande enkel process"
        imageUrl={`/hero-images/shape_50.png`}
      >
        <p className="mb-2">
          Har ni börjat titta på uppdhandlingar och funderat på att bygga det
          internt pga krånglet med kravställning?
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronPage;
