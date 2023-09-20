import '../../Assets/Styles/DataContainer.css'
import '../../Assets/Styles/DataContainerRight.css'
import AnalogValue from '../../Components/AnalogValue/AnalogValue'
import DataAnalogValue from '../../Data/analog.json'
import BarChart from '../../Components/BarChart/BarChart'
import InjectorsData from '../../Data/injectors.json';
import LineChart from '../../Components/LineChart/LineChart'
import DataPressure from '../../Data/pressure.json'

function DataContainerRight(){   
    const dataInj = InjectorsData;
    const dataPressure = DataPressure;
    const HpSpedCL = DataAnalogValue[0];
    const HpPressureCL = DataAnalogValue[2];

    return(
        <div id='DataContainerRight' className='DataContainer'>
            <h2> Dosing CL </h2>
            <div className="Widget-row">
                <AnalogValue 
                    value={HpSpedCL.value}
                    unit={HpSpedCL.unit}
                    title={HpSpedCL.title}
                    warn={HpSpedCL.warn}
                    alm={HpSpedCL.alm}
                />
            </div>
            <div className="Widget-row">
                <AnalogValue 
                    value={HpPressureCL.value}
                    unit={HpPressureCL.unit}
                    title={HpPressureCL.title}
                    warn={HpPressureCL.warn}
                    alm={HpPressureCL.alm}
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

export default DataContainerRight;