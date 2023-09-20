import React from 'react';
import { 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Label,
    ResponsiveContainer } from 'recharts';



function MyLineChart(props){
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart 
        data={props.data}
        margin={{ 
          top: 25,
          right: 10,
          left: -30,
          bottom: -10
          }}
          label="Ciao"
      >
      <CartesianGrid opacity={0.1} vertical={false}/>

        <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor='#00FFFF' stopOpacity={1}/>
            <stop offset="95%" stopColor='#0094FF' stopOpacity={0.05}/>
        </linearGradient>
          <linearGradient id="colorsp" x1="0" y1="0" x2="0" y2="1">
{/*             <stop offset="0%" stopColor='#FFF' stopOpacity={1}/>
            <stop offset="95%" stopColor='#0094FF' stopOpacity={0.05} /> */}
          </linearGradient>

        </defs>
        <XAxis 
                dataKey="time"
                tick={{fill: '#ebeefe'}} 
                style={{
                    fontSize: '0.5rem',
                    fontFamily: 'Times New Roman',
                }}>
                <Label 
                  value="Pressure" offset={0} position="insideTop"
                  fontSize={16}
                  fill={'#ebeefe'}
                  dy={-175}
                />
        </XAxis>

        <YAxis 
          domain={[0, 200]}
          tick={{fill: '#ebeefe'}} 
          style={{
              fontSize: '0.8rem',
              fontFamily: 'Times New Roman',
          }}> 
        </YAxis>
       
        <Tooltip 
          content={<BarCustomTooltip />}
          cursor={{fill: 'rgba(96, 96, 96, 0.37)'}}
          dy={10}
        />        
        
        <Area type="monotone" dataKey="pv" stroke="#00FFFF" fillOpacity={1} fill="url(#colorPv)" />
        <Area type="monotone" dataKey="sp" stroke="#FFF" fillOpacity={1} fill="url(#colorsp)" />
      </AreaChart>
  </ResponsiveContainer>
  )
}

function BarCustomTooltip({active, payload, label}){
  if (active){
     return <div className='tooltip'>
      <p>{label}</p>
          <p>
              sp: {payload[1].value.toFixed(1)}
          </p>
          <p>
              pv: {payload[0].value.toFixed(1)} 
          </p>
      </div>
  }
}
export default MyLineChart;