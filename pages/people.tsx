import Layout from "../components/layout";
import MemberCard from "../components/memberCard";

export default function People() {
  return (
    <Layout>
      <div className="container text-center max-w-6xl items-center min-w-3xl align-center pb-20 pt-16 mx-auto">
        <div className="font-bold text-6xl text-gray-900 max-w-xl mx-auto mb-4">
          Our Team.
        </div>
        <div className="text-lg text-gray-500 max-w-md mx-auto">
          Our multi disciplinary team has years of both machine learning and medical experience.
        </div>
        <div className="w-full max-w-4xl border border-gray-100 my-8 mx-auto"></div>
          <div className="flex flex-col space-y-10">
          <MemberCard
            imagePath="sabersami.png"
            name="Saber Sami"
            title="Principle Investigator & Senior Lecturer"
            affiliation="Norwich Medical School"
          />
          <MemberCard
            imagePath="chrisfleetwood.jpg"
            name="Chris Fleetwood"
            title="Technical Lead & Lab Member"
            affiliation="University of East Anglia"
            reverse={true}
          />
          <MemberCard
            imagePath="tomcarr.png"
            name="Thomas Carr"
            title="P.H.D Student & Lab Member "
            affiliation="Norwich Medical School"
          />
          <MemberCard
            imagePath="rorypinkney.jpg"
            name="Rory Pinkney"
            title="Masters Student & Lab Member"
            affiliation="University of East Anglia"
            reverse={true}
          />
        </div>
      </div>
    </Layout>
  );
}
