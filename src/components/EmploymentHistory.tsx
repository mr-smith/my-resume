import Employer from "./Employer";

function EmploymentHistory({
  data,
}: {
  data: {
    company: string;
    date: string;
    roles: { title: string; date: string; tasks: string[] }[];
  }[];
}) {
  return (
    <div className="mb-8">
      <div className="text-lg font-bold mb-1">Employment History</div>
      {data.map((h, i) => (
        <Employer data={h} key={i} first={i == 0} />
      ))}
    </div>
  );
}

export default EmploymentHistory;
