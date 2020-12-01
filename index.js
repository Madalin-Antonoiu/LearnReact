function List(props){
    const arr = props.data;
    const items = arr.map(
        (item) => <li>{item}</li>
    );

    return (
        <ul>{items}</ul>
    )
}


const el = <List data={["A", "B", "C"]} />;
ReactDOM.render(el, document.getElementById('app'));
