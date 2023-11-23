import Item from "../../components/item/Item";
import { ItemData } from "../../components/item/ItemData";
import "./Shop.css"

const dataObject : ItemData = new ItemData(0, "Hydrogen",
 "The simplest element", 100, "https://energyeducation.ca/wiki/images/thumb/8/88/HYDROGEN.png/200px-HYDROGEN.png");

function Shop() {
  return (
    <div className="shop">
        <Item data={dataObject}/>
        <Item data={dataObject}/>
        <Item data={dataObject}/>
        <Item data={dataObject}/>
        <Item data={dataObject}/>
        <Item data={dataObject}/>
    </div>
  );
}

export default Shop;
