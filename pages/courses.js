import Image from "next/image";

import Layout from "@components/Layout";
import CourseForm from "@components/CourseForm";

import { getAllEgghead } from "lib/courses";

export default function Courses({ courses }) {
  const sortedCourses = [...courses].sort(
    (a, b) => a.recordedCourse.order - b.recordedCourse.order
  );
  return (
    <Layout>
      <div className="container mx-auto">
        <h1>Courses</h1>
        <h2>Video Courses</h2>
        <p>
          I regularly create video courses and, at the moment, use the egghead
          platform to share them. Here are the current ones:
        </p>
        <div class="grid grid-cols-3 space-x-4 space-y-4">
          {sortedCourses.map((course) => (
            <RenderedCourse {...course.recordedCourse} />
          ))}
        </div>

        <h2>Instructor led courses</h2>
        <p>
          As well as pre-recorded courses, I also deliver instructor led
          courses, both in-person and over Zoom.
        </p>
        <p>
          I work with teams and individuals around the world and help them level
          up. Most of these are 3 day courses but can be expanded and optimised
          for your use case.
        </p>
        <p>Here are some courses that I have delivered recently:</p>
        <ul>
          <li>Node.js</li>
          <li>
            Node.js: Preparation for OpenJS Node.js Application Developer
            (JSNAD)
          </li>
          <li>Migrating to Next.js</li>
          <li>TypeScript</li>
          <li>Python for beginners</li>
          <li>React</li>
          <li>GraphQL</li>
          <li>Modern JavaScript</li>
          <li>Vue.js</li>
        </ul>
        <h2>Bespoke courses</h2>
        <p>
          I've also worked with companies to provide bespoke courses and
          tutorials for students and clients.
        </p>
        <br />
        <h3>
          If any of this sounds of interest to you, reach out and see how we can
          work together.
        </h3>
        <CourseForm />
      </div>
    </Layout>
  );
}

function RenderedCourse({ image, title, link, cta }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" key={title}>
      <div class="bg-white rounded-lg shadow-lg flex flex-col">
        <Image
          src={image.sourceUrl}
          class="rounded-t-lg mx-auto"
          style="margin:0"
          alt={image.altText}
          width="480"
          height="480"
        />
        <div class="p-4 text-center">
          <div class="font-bold">{title}</div>
          {cta}
        </div>
      </div>
    </a>
  );
}

export async function getStaticProps() {
  const { courses } = await getAllEgghead();

  return {
    props: {
      courses,
    },
  };
}
