function Summary({ data }: { data: string }) {
  return (
    <div className="mb-8">
      <div className="text-lg font-bold">Summary</div>
      <div className="">{data}</div>
    </div>
  );
}

export default Summary;
