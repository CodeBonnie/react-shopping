export class ItemData
{
  id: number;
  name: string;
  description: string;
  price: number;
  imageURL: string;

  public constructor(id:number, name:string,
	 description:string, price:number,
	  imageURL:string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageURL = imageURL;
  }
}
