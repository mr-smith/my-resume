function Education({
  data,
}: {
  data: { school: string; location: string; dates: string; focus: string };
}) {
  return (
    <div>
      <div className="text-lg font-bold">Education</div>
      <div>
        <span className="font-semibold">{data.school}</span>, {data.location},{" "}
        {data.dates}
      </div>
      <div>{data.focus}</div>
    </div>
  );
}

export default Education;
