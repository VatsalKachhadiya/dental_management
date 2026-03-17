import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { dummyExperts } from "@/app/_data/dummyExperts";

function ExpertDetailPage({ params }) {
  const expert = dummyExperts.find((item) => item.slug === params.slug);

  if (!expert) {
    notFound();
  }

  return (
    <div className="animate-in fade-in duration-500 px-4 py-10 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl rounded-2xl border bg-white p-6 shadow-sm dark:bg-slate-900 md:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Image
              src="/doctors.jpg"
              alt={expert.name}
              width={600}
              height={600}
              className={`h-[360px] w-full rounded-xl object-cover ${expert.imgPos}`}
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{expert.name}</h1>
            <p className="mt-2 text-primary">{expert.role}</p>
            <p className="mt-5 text-sm text-gray-600 dark:text-gray-300">{expert.about}</p>

            <div className="mt-6 space-y-2 text-sm">
              <p>
                <span className="font-semibold">Experience:</span> {expert.exp}
              </p>
              <p>
                <span className="font-semibold">Speciality:</span> {expert.speciality}
              </p>
              <p>
                <span className="font-semibold">Education:</span> {expert.education}
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              <Link href="/book-appointment">
                <Button>Book Appointment</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertDetailPage;

