import { ElementProps } from "../types/types";

const Element: React.FC<ElementProps> = ({operatorChoice, data}) => {
  const onClick = () => {
    operatorChoice(data);
  }
  return (
    <div onClick={onClick} className="element">
      <img src={data.logo} alt={data.name} className="logo" />
      <p className="label">{data.name}</p>
    </div>
  );
}

export default Element;