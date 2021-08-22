import React, { useState } from "react";
import { Select as AntdSelect, Divider, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Props {
  options: string[];
  value: any;
  onChange: (value: string) => void;
  disableAdd?: boolean;
  disabled?: boolean;
}

export const Select: React.FC<Props> = ({
  options = [],
  value = [],
  onChange,
  disableAdd = false,
  disabled = false,
}) => {
  const [ownOptions, setOwnOptions] = useState([] as string[]);
  const [newOptionName, setNewOptionName] = useState("");

  const onNameChange = (event: any) => {
    setNewOptionName(event.target.value);
  };

  const addItem = () => {
    setOwnOptions([...ownOptions, newOptionName]);
    setNewOptionName("");
  };

  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <AntdSelect
      disabled={disabled}
      size={"large"}
      placeholder="Select one..."
      value={value}
      onChange={handleChange}
      style={{ width: "100%" }}
      dropdownRender={
        disableAdd
          ? undefined
          : (menu: any) => (
              <div>
                {menu}
                <Divider style={{ margin: "4px 0" }} />
                <div
                  style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}
                >
                  <Input
                    style={{ flex: "auto" }}
                    value={newOptionName}
                    onChange={onNameChange}
                  />
                  <a
                    style={{
                      flex: "none",
                      padding: "8px",
                      display: "block",
                      cursor: "pointer",
                    }}
                    href={"#"}
                    onClick={addItem}
                  >
                    <PlusOutlined /> Add
                  </a>
                </div>
              </div>
            )
      }
    >
      {[...options, ...ownOptions].map((item) => (
        <AntdSelect.Option key={item} value={item}>
          {item}
        </AntdSelect.Option>
      ))}
    </AntdSelect>
  );
};
