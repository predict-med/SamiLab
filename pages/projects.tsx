import Layout from "../components/layout";
import connectivity from "../public/projects/connectivity.png";
import brainboard from "../public/projects/brainboard.png";
import ProjectCard from "../components/projectCard";

export default function Projects() {
  return (
    <Layout>
      <div className="container text-center min-w-3xl pt-16 pb-16 mx-auto">
        <div className="font-bold text-6xl text-gray-900 max-w-xl mx-auto">
          Projects.
        </div>
        <div className="text-lg text-gray-500 max-w-md mx-auto my-6">
          We believe in collaborative and reproducible science. All of our
          projects and papers are proudly
          <span className="font-bold hero-text"> open source.</span>
        </div>
      </div>
      <section>
        <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col gap-y-12 px-4 md:px-0">
          <ProjectCard
            title={"Brainboard"}
            description={
"Brainboard is a fully featured, web-based fMRI data visualisation tool which combines multiple graphical representations of brain connectivity into a single interactive dashboard." 
            }
            buttonText={"Learn More"}
            image={brainboard}
            buttonLink={"https://github.com/rtybanana/brainboard"}
            author={"Rory Pinkney"}
          />
          <ProjectCard
            title={"Multi-modal diganosis of cognitive impairment"}
            description={
            "Presented at OHBM 2021, this poster investigated feature fusion from fMRI & DTI in order to accurately diagnose Mild Cognitive Impairment to a high degree of accuracy."
            }
            buttonText={"Learn More"}
            image={connectivity}
            buttonLink={"https://anyscreeninc.com/PF/OHBM/2021/OHBM-Educational-Courses/pdf_poster_files/Christopher_Fleetwood60785c809a647/Christopher_Fleetwood.pdf"}
            author={"Fleetwood et al."}
          />
            </div>
        </div>
      </section>
    </Layout>
  );
}
