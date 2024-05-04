function Header({
  name,
  street,
  city,
  state,
  zip,
  email,
  phone,
}: {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phone: { type: string; number: string };
}) {
  return (
    <div className="flex items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="text-xs">
          <h2>{street}</h2>
          <h2>
            {city},{state} {zip}
          </h2>
          <h2>{email}</h2>
          <h2>
            {phone.type}: {phone.number}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
