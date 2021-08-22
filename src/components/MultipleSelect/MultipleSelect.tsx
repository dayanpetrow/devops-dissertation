import React, { useState } from "react";
import { Select, Divider, Input, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Props {
  options: string[];
  selectedOptions: string[];
  onChange: (selectedOptions: string[]) => void;
  disableAdd?: boolean;
  disabled?: boolean;
  limit?: number;
}

export const MultipleSelect: React.FC<Props> = ({
  options = [],
  selectedOptions = [],
  onChange,
  disableAdd = false,
  disabled = false,
  limit,
}) => {
  const [ownOptions, setOwnOptions] = useState([] as string[]);
  const [newOptionName, setNewOptionName] = useState("");
  const [hasLimitError, setHasLimitError] = useState(false);

  const onNameChange = (event: any) => {
    setNewOptionName(event.target.value);
  };

  const addItem = () => {
    setOwnOptions([...ownOptions, newOptionName]);
    setNewOptionName("");
  };

  const handleChange = (selectedItems: string[]) => {
    setHasLimitError(false);

    if (limit && limit < selectedItems.length) {
      setHasLimitError(true);
      message.error(`Cannot select more than ${limit} options.`);
      return;
    }

    onChange(selectedItems);
  };

  const onBlur = () => setHasLimitError(false);

  const filteredOptions = [...options, ...ownOptions].filter(
    (o) => !selectedOptions.includes(o)
  );

  return (
    <Select
      size={"large"}
      mode={"multiple"}
      placeholder="Select multiple..."
      value={selectedOptions}
      onChange={handleChange}
      style={{ width: "100%" }}
      className={hasLimitError ? "limit-error" : ""}
      onBlur={onBlur}
      dropdownRender={
        disableAdd
          ? undefined
          : (menu) => (
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
                    onClick={addItem}
                    href={"#"}
                  >
                    <PlusOutlined /> Add
                  </a>
                </div>
              </div>
            )
      }
    >
      {filteredOptions.map((item) => (
        <Select.Option key={item} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};
