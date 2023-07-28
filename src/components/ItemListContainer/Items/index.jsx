import Item from "../Item"
function Items({products}){
    return products.map((data) => <Item data={data} />);
}

export default Items;