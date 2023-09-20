import React from "react";
import '../../Assets/Styles/AnalogValue.css'


function AnalogValue(props){
    let value = (props.value);
    let unit = (props.unit);
    let title = (props.title);
    let WaringThreshold = (props.warn);
    let AlarmThreshold = (props.alm);

     // Initialize variables
     let Style;
     let hasThresholds;
     let degree = 270*value/100;
     let degreeWar=(270*WaringThreshold/100);
     let degreeAlm=(270*AlarmThreshold/100);
     let degreeWarStart=(270*WaringThreshold/100)-10;
     let degreeAlmStart=(270*AlarmThreshold/100)-10;
     let classValue ="AnalogValue-value";
     
     // Style colors
     const OneColorStyle = {
         background: 
         'conic-gradient(var(--light-blue) 0deg, var(--light-blue) ' + degree+ 'deg'+
         ',#3d3d3d '+ degree+ 'deg, #3d3d3d 270deg)',
     };
     const WarningColorStyle= {
         background: 
         'conic-gradient(var(--light-blue) 0deg, var(--light-blue) ' + degreeWarStart+ 'deg'+
         ',var(--yellow) '+ degreeWar+ 'deg,var(--yellow) '+ degree+ 'deg'+
         ',#3d3d3d '+ degree+ 'deg, #3d3d3d 270deg)',
     };
     const AlarmColorStyle= {
         background: 
         'conic-gradient(var(--light-blue) 0deg, var(--light-blue) ' + degreeWarStart+ 'deg'+
         ',var(--yellow) '+ degreeWar + 'deg,var(--yellow) '+ degreeAlmStart+ 'deg'+
         ',var(--red) '+ degreeAlm + 'deg,var(--red) '+ degree+ 'deg'+
         ',#3d3d3d '+ degree + 'deg, #3d3d3d 270deg)',
     };
 
     // Check If I have a Threshold
     if (WaringThreshold===0 && AlarmThreshold ===0)  {
         hasThresholds = false;
     } else {
         hasThresholds = true;
     }
 
     // Pass the correct progress color style for the return function
     if (hasThresholds){
         switch(true) {
             case (value >=0) && (value <WaringThreshold):
                 Style = OneColorStyle;
               break;
             case (value >=WaringThreshold) && (value <AlarmThreshold):
                 Style = WarningColorStyle;
               break;
             case (value >=AlarmThreshold):
                 Style = AlarmColorStyle;
             break;
             default:
           }
     }else{
         Style = OneColorStyle;
     }

     // Check if Is Warning or Alarm 
     if (hasThresholds) {
        if(value>=WaringThreshold && value<AlarmThreshold){
            classValue = "AnalogValue-value-warn-active";
         }else if (value>=AlarmThreshold){
            classValue = "AnalogValue-value-alarm-active";
         }else{
            classValue = "AnalogValue-value";       
         }        
     } else {
        classValue = "AnalogValue-value";    
     }    


    return(
        <div id="AnalogValue-container">
            <div id="AnalogValue-title">
                <span id="AnalogValue-name">{title}</span>
            </div>        
            <div id="AnalogValue-circular-progress-bar">
                <div id="AnalogValue-circle-outer"></div>
                <div id="AnalogValue-circle-color-progress" style={Style}></div>
                <div id="AnalogValue-circle-inner">
                    <div id="AnalogValue-text-container">
                        <span className={classValue}>{value}{' '}</span>
                        <br></br>
                        <span id="AnalogValue-unit">{unit}</span> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalogValue;