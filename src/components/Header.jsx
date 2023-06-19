import "./Header.css";

export default function Header() {
  return (
    <div>
      <h1 className="uppercase">
        You are now connected to the Wi-Fi for Historic Royal Palaces.
      </h1>
      <div>
        <p className="pt-[4px]">
          Thank you for Playing Your Part by visiting this Palace today. We hope
          you enjoy your visit.
        </p>
        <p className="px-1">
          By signing up to receive emails from Historic Royal Palaces you will
          discover the stories, past and present, behind these historic
          buildings, and receive regular updates about what’s on at the palaces,
          our charitable work and our range of shop products. We may
          occasionally include content from corporate partners, sponsors and
          other visitor attractions. We will not share your personal details
          with these third parties.
        </p>
      </div>
    </div>
  );
}
