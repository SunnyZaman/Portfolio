import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
// import {
//   ApolloClient,
//   InMemoryCache,
//   createHttpLink,
//   gql,
//   useQuery,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import MoreProjects from "../components/MoreProjects";
import { fetchGitHubRepos } from "../utils/fetchGitHubRepos";
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { getApolloClient } from "../services/getApolloClient";
type Props = {
  pageInfo?: PageInfo;
  experiences?: Experience[];
  skills?: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  const [repos, setRepos] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const octokit = new Octokit({
          auth: `${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
        });
        octokit
          .graphql(
            `{
            user(login: "sunnyzaman") {
              pinnedItems(first: 3) {
                edges {
                  node {
                    ... on Repository {
                    id
                    name
                    description
                    languages(first: 5) {
                      nodes {
                        name
                        id
                      }
                    }
                  }
                }
              }
            }
          }
        }
        `
          )
          .then((data: any) => {
            // handle data
            const repos = data.user.pinnedItems.edges.map(
              ({ node }: any) => node
            );
            // console.log(data);
            setRepos(repos);
            setLoading(false);
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <div className="bg-[#f4f4f4] text-black h-screen overflow-y-scroll z-0">
      <Head>
        <title>Sunny Zaman</title>
        <meta
          name="description"
          content="Sunny Zaman's software developer portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header socials={socials} />
      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="py-20 text-center">
        <h3 className="section-heading">About</h3>
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="py-20">
        <h3 className="section-heading text-center">Experience</h3>
        <WorkExperience experiences={experiences} />
      </section>

      {/* </section> */}
      <section id="skills" className="py-20 text-center">
        <h3 className="section-heading">Skills</h3>
        <h4 className="uppder tracking-[3px] text-gray-500 text-sm mt-7">
          Some stuff I&apos;ve learned along my software journey
        </h4>
        <Skills skills={skills} />
      </section>
      <section id="projects" className="py-20 text-center">
        <h3 className="section-heading">Projects</h3>
        <Projects projects={projects} />
      </section>

      <section id="noteworthy-projects" className="py-20 text-center">
        <h3 className="section-heading">Other Work</h3>
        {loading ? "Loading..." : <MoreProjects pinnedItems={repos} />}
      </section>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const hostname = ctx.req.headers.host;
  const pageInfo: PageInfo = await fetchPageInfo(hostname);
  const experiences: Experience[] = await fetchExperiences(hostname);
  const skills: Skill[] = await fetchSkills(hostname);
  const socials: Social[] = await fetchSocials(hostname);
  const projects: Project[] = await fetchProjects(hostname);
  // handle data
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
      projects,
    },
    // revalidate:10
  };
};
