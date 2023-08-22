import React from "react";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import { Timeline } from "antd";

const ServicesPage = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: (
        <Timeline
          items={[
            {
              children: "Create a services site 2015-09-01",
            },
            {
              children: "Solve initial network problems 2015-09-01",
            },
            {
              children: "Technical testing 2015-09-01",
            },
            {
              children: "Network problems being solved 2015-09-01",
            },
          ]}
        />
      ),
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
  ];

  return (
    <div className="m-16">
      <Collapse items={items} defaultActiveKey={["1"]} />
    </div>
  );
};

export default ServicesPage;
