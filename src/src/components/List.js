import Card from "./Card"
const List = (props) =>{
    return props.data.map((data)=>(
    <Card key={data.title} heading={data.title} para={data.description} url={data.url} img={data.urlToImage}/>))
    
}
export default List;