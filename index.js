function Converter(){
    const {useState} = React;
    const [annualSalary, setAnnualSalary] = useState(20000);
    const taxFreeAllowance = 12509;
    
    function handleChange(e){
        setAnnualSalary(e.target.value);
    }
    function takeHome(annualSalary){
        if(annualSalary > 0 && annualSalary <= 50000){
            return ( annualSalary - ( incomeTax(annualSalary) + nITax(annualSalary)) ).toFixed(0);
        } else {
            return 0
        }
    }
    function taxablePay(annualSalary){
        return (annualSalary - taxFreeAllowance)
    }
    function incomeTax(annualSalary){
        return (20/100) * taxablePay(annualSalary)
    }
    function nITax(annualSalary){
        return (12/100) * taxablePay(annualSalary)
    }


    return (
        <div>
            <h4>Per Annum</h4>
            £<input type="text" value={annualSalary} onChange={handleChange} />

            <table>
                <tr>
                    <th></th>
                    <th scope="col">Yearly</th>
                    <th scope="col">Monthly</th>
                    <th scope="col">Hourly (40h/week)</th>
                </tr>
                <tr>
                    <th scope="row">Income (before tax)</th>
                    <td>£{annualSalary}</td>
                    <td>£{(annualSalary/12).toFixed(0)}</td>
                    <td>£{(annualSalary/12/160).toFixed(2)}</td>
                </tr>

                <tr>
                    <th scope="row">Non-Taxable</th>
                    <td>£{taxFreeAllowance}</td>
                    <td>£{(taxFreeAllowance/12).toFixed(0)}</td>
                    <td>£{(taxFreeAllowance/12/160).toFixed(2)}</td>
                </tr>
                <tr>
                    <th scope="row">From Which Taxable</th>
                    <td>£{taxablePay(annualSalary)}</td>
                    <td>£{(taxablePay(annualSalary)/12).toFixed(0)}</td>
                    <td>£{(taxablePay(annualSalary)/12/160).toFixed(2)}</td>
                </tr>
                <tr>
                    <th scope="row">Total Tax</th>
                    <td>£{(incomeTax(annualSalary) + nITax(annualSalary)).toFixed(0)}</td>
                    <td>£{((incomeTax(annualSalary)+ nITax(annualSalary))/12).toFixed(0)}</td>
                    <td>£{((incomeTax(annualSalary)+nITax(annualSalary))/12/160).toFixed(2)}</td>
                </tr>
                <tr>
                    <th scope="row">Income Tax</th>
                    <td>£{(incomeTax(annualSalary)).toFixed(0)}</td>
                    <td>£{(incomeTax(annualSalary)/12).toFixed(0)}</td>
                    <td>£{(incomeTax(annualSalary)/12/160).toFixed(2)}</td>
                </tr>
                <tr>
                    <th scope="row">National Insurance</th>
                    <td>£{(nITax(annualSalary)).toFixed(0)}</td>
                    <td>£{(nITax(annualSalary)/12).toFixed(0)}</td>
                    <td>£{(nITax(annualSalary)/12/160).toFixed(2)}</td>
                </tr>

                <tr>
                    <th scope="row">Take Home</th>
                    <td>£{takeHome(annualSalary)}</td>
                    <td>£{(takeHome(annualSalary)/12).toFixed(0)}</td>
                    <td>£{(takeHome(annualSalary)/12/160).toFixed(2)}</td>
                </tr>
            </table>

        </div>
    )
}

const el = <Converter />;
ReactDOM.render(el, document.getElementById('app'));
