import { useRouter } from "next/router";
import { FC } from "react";

const Index: FC = () => {
  const router = useRouter();

  const today = new Date()
    .toLocaleDateString()
    .replaceAll(". ", "-")
    .slice(0, 10);

  const onClick = () => {
    router.push(`/calendar/${today}`);
  };

  return (
    <section>
      <h1>Timeplifey</h1>
      <button className="btn-flat" onClick={onClick}>
        Todays Calendar
      </button>
    </section>
  );
};

export default Index;
