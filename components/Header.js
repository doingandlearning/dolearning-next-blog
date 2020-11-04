import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-primary p-4 flex justify-between md:justify-center">
      <div className="mx-0 md:mx-12">
        <div>
          <Image src="/face.svg" height="100" width="100" />
        </div>
        <div className="flex px-2 justify-between">
          <div>
            <a href="https://www.twitter.com/dolearning">
              <Image src="/twitter.svg" height="30" width="30" />
            </a>
          </div>
          <div>
            <a href="mailto:kevin@kevincunningham.co.uk">
              <Image src="/email.svg" height="30" width="30" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between text-center text-white mx-0 md:mx-12">
        <div className="text-3xl lg:text-4xl xl:text-5xl">
          <p>
            sharing what I learn <br />
            helping others level up
          </p>
        </div>
        <div className="flex justify-between text-normal lg:text-2xl xl:text-3xl">
          <Link href="/blog">blog</Link>
          <Link href="#">garden</Link>
        </div>
      </div>
      <div className="mx-0 md:mx-12">
        <Image src="/brain.svg" height="100" width="100" />
      </div>
    </div>
  );
}
