import { useState } from "react";

export interface WithCounterComponentProps {
  count: number;
  increaseCount: () => void;
}
export function withCounter<
  T extends WithCounterComponentProps = WithCounterComponentProps
>(OriginalComponent: React.ComponentType<T>) {
  const displayName =
    OriginalComponent.displayName || OriginalComponent.name || "Component";

  const NewComponent = (props: Omit<T, keyof WithCounterComponentProps>) => {
    const [count, setCount] = useState(0);

    function handleIncrementCount() {
      setCount((oldCount) => oldCount + 1);
    }
    return (
      <OriginalComponent
        {...(props as T)}
        count={count}
        increaseCount={handleIncrementCount}
      />
    );
  };

  NewComponent.displayName = `withCounter(${displayName})`;
  return NewComponent;
}
