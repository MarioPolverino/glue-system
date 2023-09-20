import '../../Assets/Styles/DataContainer.css'
import '../../Assets/Styles/DataContainerLeft.css'
import AnalogValue from '../../Components/AnalogValue/AnalogValue'
import DataAnalogValue from '../../Data/analog.json'
import BarChart from '../../Components/BarChart/BarChart'
import InjectorsData from '../../Data/injectors.json';
import LineChart from '../../Components/LineChart/LineChart'
import DataPressure from '../../Data/pressure.json'

function DataContainerLeft(){   
    const dataInj = InjectorsData;
    const dataPressure = DataPressure;

    return(
        <div id='DataContainerLeft' className='DataContainer'>
            <h2> Dosing SL </h2>
            <div className="Widget-row">
                <AnalogValue 
                    value={DataAnalogValue[0].value}
                    unit={DataAnalogValue[0].unit}
                    title={DataAnalogValue[0].title}
                    warn={DataAnalogValue[0].warn}
                    alm={DataAnalogValue[0].alm}
                />
            </div>
            <div className="Widget-row">
                <AnalogValue 
                    value={DataAnalogValue[1].value}
                    unit={DataAnalogValue[1].unit}
                    title={DataAnalogValue[1].title}
                    warn={DataAnalogValue[1].warn}
                    alm={DataAnalogValue[1].alm}
                />
            </div>
            <div className="Widget-row">
                <BarChart 
                    data={dataInj}
                />
            </div>
            <div className="Widget-row">
                <LineChart 
                    data={dataPressure}
                />
            </div>
        </div>
    )
}

export default DataContainerLeft;