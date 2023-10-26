import { Container } from "@/components/Layout/Container";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

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
              {/* TODO: Replace with proper button class or similar */}
              <Link
                className="border-white border px-6 py-3 rounded-full inline-block"
                href="/"
              >
                <ArrowLeftIcon className="inline-block h-4 mr-1" />
                Gå till start
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center pt-8">
            {/* TODO: Replace with a funnier or decent illustration */}
            <div className="animate-bounce text-3xl w-5">🦤 oh nooo!!!</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
