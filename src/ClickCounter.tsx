import { withCounter, WithCounterComponentProps } from "./WithCounter";

interface ClickCounterOriginalProps extends WithCounterComponentProps {
  title: string;
}

function ClickCounterOriginal({
  title,
  count,
  increaseCount,
}: ClickCounterOriginalProps) {
  return (
    <>
      <div>{title} </div>
      <div>Click Counter : {count} </div>
      <button onClick={increaseCount}>Increase The Counter By Click</button>
    </>
  );
}

export const ClickCounter = withCounter(ClickCounterOriginal);
