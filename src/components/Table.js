import './table.css';

function Table(){
    return(
        <div class="table">
            <table>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Dept</th>
                    <th>Reg.no</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mani</td>
                    <td>ECE</td>
                    <td>119</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mukesh</td>
                    <td>ECE</td>
                    <td>70</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Naveen</td>
                    <td>ECE</td>
                    <td>73</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Tarun</td>
                    <td>ECE</td>
                    <td>114</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Vaishnavi</td>
                    <td>ECE</td>
                    <td>117</td>
                </tr>
            </table>
        </div>
    )
}

export default Table;