interface Iprops {
  id: string;
}

export default function Contact({ id }: Iprops) {
  return (
    <div id={id} className="scroll-smooth">
      <h1 className="text-white">Contact</h1>
    </div>
  );
}
