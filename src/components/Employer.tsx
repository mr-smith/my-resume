import EmploymentRole from "./EmploymentRole";

function Employer({
  data,
  first,
}: {
  data: {
    company: string;
    date: string;
    roles: { title: string; date: string; tasks: string[] }[];
  };
  first: boolean;
}) {
  return (
    <div className={`ml-2 ${first ? "" : "mt-4"}`}>
      <div>
        <span className="font-bold">{data.company}, </span>
        {data.date}
      </div>
      {data.roles.map((r, i) => (
        <EmploymentRole data={r} key={i} />
      ))}
    </div>
  );
}

export default Employer;
