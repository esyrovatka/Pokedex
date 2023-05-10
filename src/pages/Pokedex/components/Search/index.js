import { Select, Space } from "antd";
import React from "react";
import useSearch from "./useSearch";

const Search = ({ selectType, setSelectType }) => {
  const { types } = useSearch();
  return (
    <Space style={{ display: "flex", justifyContent: "center" }}>
      <Select
        style={{ width: "300px" }}
        onChange={(e) => setSelectType(e)}
        value={selectType}
        options={[
          { value: "All", label: "All" },
          ...types.map((item) => ({
            value: item.name,
            label: item.name,
          })),
        ]}
      />
    </Space>
  );
};

export default Search;
