import { withCounter, WithCounterComponentProps } from "./WithCounter";

interface MouseOverCounterOriginalProps extends WithCounterComponentProps {
  description: string;
}

function MouseOverCounterOriginal({
  description,
  count,
  increaseCount,
}: MouseOverCounterOriginalProps) {
  return (
    <>
      <div>{description} </div>
      <div>Mouse Over Counter : {count} </div>
      <button onMouseOver={increaseCount}>
        Increase By Hovering The Mouse Over The Button{" "}
      </button>
    </>
  );
}

export const MouseOverCounter = withCounter(MouseOverCounterOriginal);
