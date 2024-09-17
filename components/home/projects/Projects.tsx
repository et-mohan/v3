import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Classroom Reservation System",
    imgSrc: "/project-imgs/Classroom-Reservation-System.png",
    code: "https://github.com/et-mohan/Classroom-Reservation-System.git",
    tech: ["codeigniter", "bootstrap", "sql"],
    description:
      "Classroom Reservation System is a tool that allows users to book classrooms for specific times and dates. It helps in efficient management of classroom resources and prevents scheduling conflicts.",
    modalContent: (
      <>
        <p>
          Worked as a front-end developer and created dynamic reusable
          components and base layout from a mock-up.
        </p>
        <p>
          The tech stack is based on codeigniter with the custom components.
        </p>
      </>
    ),
  },
  {
    title: "Real time quiz application",
    imgSrc: "/project-imgs/Quiz.png",
    code: "https://github.com/et-mohan/Real-time-quiz-application",
    tech: ["React js", "Node js ", "socket io"],
    description:
      "Real-time quiz application is an interactive platform that allows users to participate in live quizzes. It provides immediate feedback on answers and often includes features like leaderboards and time constraints, creating a competitive and engaging experience.",
    modalContent: (
      <>
        <p>
          Worked as a both frontend and backend developer and created dynamic
          reusable components and base layout from a mock-up.
        </p>
        <p>
          The tech stack used : React js for frontend and node js for backend .
        </p>
      </>
    ),
  },
  {
    title: "chat application",
    imgSrc: "/project-imgs/chat.jpeg",
    code: "https://github.com/et-mohan/real-time-chat-application",
    tech: ["React js", "Node js ", "socket io"],
    description: "Real time chat application",
    modalContent: (
      <>
        <p>
          Real-time chat application is a platform that allows users to
          communicate instantly with each other in real-time.
        </p>
      </>
    ),
  },
  {
    title: "Api",
    imgSrc: "/project-imgs/api.jpeg",
    code: "https://github.com/et-mohan/fest-api.git",
    tech: ["Node.js", "Express.js", "Cheerio"], // Corrected technology names
    description:
      "This API provides real-time data on college fests happening across Tamil Nadu, empowering users to stay informed about upcoming events and engage with the vibrant college fest scene.", // Engaging description

    // Optional content for modal (consider revising)
    modalContent: (
      <>
        <p>
          I designed and developed the backend infrastructure for the Tamil Nadu
          College Fest API, utilizing Node.js and Express.js to create scalable RESTful API. I employed Cheerio to efficiently scrape
          data from various college fest websites, ensuring timely and accurate
          updates.
        </p>
        <p>
          Key features of the API include:
          <ul>
            <li>Real-time data on college fests in Tamil Nadu</li>
            <li>
              Detailed event listings, including dates, times, and descriptions
            </li>
            <li>
              Information about participating colleges and their specific events
            </li>
            <li>
              User-friendly API endpoints for easy integration into other
              applications
            </li>
          </ul>
        </p>
      </>
    ),
  },
];
