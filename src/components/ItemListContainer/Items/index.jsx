import Item from "../Item"
function Items({products}){
    return products.map((data) => <Item key={data.id} data={data} />);
}

export default Items;