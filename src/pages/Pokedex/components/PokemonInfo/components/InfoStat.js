import { Space } from "antd";
import React from "react";

const InfoStat = ({ name, value }) => {
  return (
    <Space
      style={{
        display: "flex",
        borderBottom: "1px solid #000",
        justifyContent: "space-between",
      }}
    >
      <span style={{ display: "flex", textTransform: "capitalize" }}>
        {name}
      </span>
      <span>{value}</span>
    </Space>
  );
};

export default InfoStat;
