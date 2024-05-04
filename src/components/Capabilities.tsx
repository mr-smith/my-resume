function capability(data: { type: string; value: string }, i: number) {
  return (
    <li key={i}>
      <span className="font-semibold">{data.type}: </span>
      {data.value}
    </li>
  );
}

function Capabilities({ data }: { data: { type: string; value: string }[] }) {
  return (
    <div className="mb-8">
      <div className="text-lg font-bold">Capabilities</div>
      <ul className="list-disc ml-6">{data.map((d, i) => capability(d, i))}</ul>
    </div>
  );
}

export default Capabilities;
