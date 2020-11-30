function Converter(){
    const {useState} = React;
    const [km, setKm] = useState(0);
    
    function handleChange(e){
        setKm(e.target.value);
    }
    function convert(km){
        return (km/1.609).toFixed(2);
    }

    return (
        <div>
            <h4>KM to Miles</h4>
            <input type="text" value={km} onChange={handleChange} />
            <p>{km}km is {convert(km)} miles.</p>
        </div>
    )
}

const el = <Converter />;
ReactDOM.render(el, document.getElementById('app'));
