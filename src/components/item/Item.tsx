import { ItemData } from "./ItemData";
import "./ItemData";
import "./Item.css";

interface ItemProps {
  data: ItemData;
}

const Item: React.FC<ItemProps> = ({ data }) => {
  return (
    <div className="item">
        <img src={data.imageURL}></img>
        <p>{data.name}</p>
        <p>{data.price}</p>
    </div>
  );
};

export default Item;
