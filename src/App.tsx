import resume from "./data/resume.json";
import { usePageTitle } from "./hooks/usePageTitle";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Capabilities from "./components/Capabilities";
import EmploymentHistory from "./components/EmploymentHistory";
import Education from "./components/Education";

function App() {
  usePageTitle(resume.name + " - Resume");

  return (
    <main className="font hyphens-manual text-slate-500 text-base">
      <div className="p-6 mx-auto max-w-5xl bg-white">
        <Header
          name={resume.name}
          street={resume.address.street}
          city={resume.address.city}
          state={resume.address.state}
          zip={resume.address.zip}
          email={resume.email}
          phone={resume.phone}
        />
        <Summary data={resume.summary} />
        <Capabilities data={resume.capabilities} />
        <EmploymentHistory data={resume.employment} />
        <Education data={resume.education} />
      </div>
    </main>
  );
}

export default App;
