import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="mb-2 mt-0 text-5xl font-medium text-blue leading-tight text-primary">
        {heading}
      </h1>
      {items.length === 0 && <p>no items found</p>}
      <ul className="w-96">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "w-full rounded-lg bg-primary p-4 text-white"
                : "w-full rounded-lg bg-white text-primary"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
