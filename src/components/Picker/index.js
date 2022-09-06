import { useState } from "react";
import { Picker } from "react-native-picker-select";

const [unitType, setUnitiType] = useState("Un");
const [types] = useState(["Un", "Kg"].sort());

const Dropdown = () => {
  return (
    <Picker
      style={{ marginVertical: 10 }}
      selectedValue={unitType}
      onValueChange={(itemVal) => {
        setUnitiType(itemVal);
      }}
    >
      {types.map((t) => {
        <Picker.Item label={l} value={t} />;
      })}
    </Picker>
  );
};

export default Dropdown;
