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
    tech: ["codeigniter","bootstrap","sql"],
    description: "lassroom Reservation System for booking classrooms",
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
    title: "Classroom Reservation System",
    imgSrc: "/project-imgs/Classroom-Reservation-System.png",
    code: "https://github.com/et-mohan/Classroom-Reservation-System.git",
    tech: ["codeigniter","bootstrap","sql"],
    description: "An Insurance Agency Listing Web Application.",
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
    title: "Classroom Reservation System",
    imgSrc: "/project-imgs/Classroom-Reservation-System.png",
    code: "https://github.com/et-mohan/Classroom-Reservation-System.git",
    tech: ["codeigniter","bootstrap","sql"],
    description: "An Insurance Agency Listing Web Application.",
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
    title: "Classroom Reservation System",
    imgSrc: "/project-imgs/Classroom-Reservation-System.png",
    code: "https://github.com/et-mohan/Classroom-Reservation-System.git",
    tech: ["codeigniter","bootstrap","sql"],
    description: "An Insurance Agency Listing Web Application.",
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
  
];
