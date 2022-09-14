import Layout from "@components/Layout";
import Link from "next/link";

export default function BelfastJS() {
  return (
    <Layout>
      <div className="container max-w-1/2 m-auto">
        <h1>Welcome BelfastJS!</h1>

        <p>
          Thanks for listening to my talk -{" "}
          <a
            href="https://docs.google.com/presentation/d/1PsSHLQwq2c1XuCsFKYgSBQHT_zf-XT5fksJkHzFJOVo/edit?usp=sharing"
            target="_blank"
          >
            the slides are here if you're interested!
          </a>
        </p>

        <p>
          I mentioned some opportunities to help improve your CLI game, here you
          go:
        </p>

        <ul>
          <li>
            My egghead course,{" "}
            <a href="https://egghead.io/courses/get-started-building-cli-tools-with-node-js-2af0caec">
              Get Started Building CLI Tools with Node.js
            </a>
            ;
          </li>
          <li>
            My session with{" "}
            <a href="https://simonplend.com" target="_blank">
              Simon
            </a>{" "}
            at NodeConfEU in October,{" "}
            <a
              href="https://www.nodeconf.eu/speakers/kevin-cunningham"
              target="_blank"
            >
              Crafting human friendly CLIs with Node.js core
            </a>
            ;
          </li>
          <li>
            A free preview workshop online on Tuesday 27th September from
            5pm-6.30pm. There's a few slots left,{" "}
            <a href="https://tally.so/r/3xXL5J" target="_blank">
              sign up here if you're interested.
            </a>
          </li>
        </ul>
        <p>
          If you're interested in me working with your team, you can reach out
          on <a href="mailto:enquiry@kevincunningham.co.uk">email</a>.
        </p>
        <p>
          I tweet here fairly regularly and send a semi-regular newsletter to
          help with learning (
          <Link href={"/newsletter"}>you can sign up here</Link>).
        </p>
      </div>
    </Layout>
  );
}
