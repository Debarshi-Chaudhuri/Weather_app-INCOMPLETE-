import React from 'react';
import '../App.css'
export const Status=(props)=>{
    return(<div>
        <table className="table">
            <tbody>
            <tr>
                <td>Geographic coordinates </td>
                <td>[{props.others.coord.lat}&nbsp;,&nbsp;{props.others.coord.lon}]</td>
                
            </tr>
            <tr>
                <td>Forecast </td>
                <td>{props.description}</td>
            </tr>
            <tr>
                <td>Pressure </td>
                <td>{props.others.main.pressure}&nbsp;hpa</td>
            </tr>
            <tr>
                <td>Humidity </td>
                <td>{props.others.main.humidity}&nbsp;%</td>
            </tr>
            </tbody>
        </table>
    </div>)
}