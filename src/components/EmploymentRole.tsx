function EmploymentRole({
  data,
}: {
  data: { title: string; date: string; tasks: string[] };
}) {
  return (
    <div className="ml-2">
      <div className="italic font-semibold">
        {data.title}, {data.date}
      </div>
      <ul className="list-dash">
        {data.tasks.map((t, i) => (
          <li className="mb-2 ml-6" key={i}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmploymentRole;
