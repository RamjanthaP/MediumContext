import Button from "@/components/Button/Button";
import { Container } from "@/components/Layout/Container";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export default function NotFound() {
  return (
    <div className="min-h-[50vh]">
      <Container>
        <div className="flex ">
          <div className="w-1/2 flex flex-col gap-4 pt-12">
            <h2 className="text-xxl">Sidan kunde inte hittas (404)</h2>
            <p className="text-lg">
              Den sidan som du letar efter är antingen borttagen eller flyttad
              (och vi har slarvat med redirecten. Ber om ursäkt i så fall. 😅).
            </p>
            <div>
              <Button
                variant="default"
                transparent
                href="/"
                element="Link"
              >
                <ArrowLeftIcon className="inline-block h-4 mr-1" />
                Gå till start
              </Button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center pt-8">
            <div className="animate-bounce text-3xl w-5">🦤 oh nooo!!!</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
