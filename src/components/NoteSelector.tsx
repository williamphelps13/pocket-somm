import Radio from "../components/Radio";
import Slider from "../components/Slider";
import {
  bodyMarks,
  colorOptions,
  standardMarks,
  yesNoOptions,
} from "../constants";
import { NoteSelectorProps } from "../types";

const NoteSelector = ({
  color,
  setColor,
  acidity,
  setAcidity,
  body,
  setBody,
  tannin,
  setTannin,
  setOak,
  setFloral,
  setMinerality,
}: NoteSelectorProps) => (
  <div className="flex min-w-full flex-col space-y-4">
    <Radio
      cId="color"
      label="Color"
      onChange={(e) => setColor(e.target.value)}
      options={colorOptions}
    />
    <Slider
      cId="acidity"
      value={acidity}
      label="Acidity"
      marks={standardMarks}
      onChange={(value) => setAcidity(value)}
      step={25}
    />
    <Slider
      cId="body"
      value={body}
      label="Body"
      marks={bodyMarks}
      onChange={(value) => setBody(value)}
      step={50}
    />
    <Slider
      cId="tannin"
      isHidden={color === "White"}
      value={tannin}
      label="Tannin"
      marks={standardMarks}
      onChange={(value) => setTannin(value)}
      step={25}
    />
    <Radio
      cId="oak"
      label="Oak"
      onChange={(e) => setOak(e.target.value)}
      options={yesNoOptions}
    />
    <Radio
      cId="floral"
      label="Floral"
      onChange={(e) => setFloral(e.target.value)}
      options={yesNoOptions}
    />
    <Radio
      cId="minerality"
      label="Minerality"
      onChange={(e) => setMinerality(e.target.value)}
      options={yesNoOptions}
    />
  </div>
);

export default NoteSelector;
