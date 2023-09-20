import React, { Suspense, useState }  from 'react';
import '../../Assets/Styles/Dashboard.css';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CameraControls from '../../Utils/Camera';
import Layout3D from './Layout3D';
import annotations from '../../Data/annotations.json'
import ButtonGoToView from './ButtonGoToView';
import ButtonHomeView from './ButtonHomeView';
import DataContainerLeft from './DataContainerLeft';
import DataContainerRight from './DataContainerRight';

function Dashboard(){
    const [position, setPosition] = useState({ x: -180, y: 105, z: -190 })
    const [target, setTarget] = useState({ x: 0, y: 0, z: 0 })

    function GoToView(idx) {
        setPosition(annotations[idx].position)
        setTarget(annotations[idx].target)
      }

    return(
        <div id="dashboard">
            <Suspense fallback={null}>
                <Canvas camera={{position: [0, 10, -120], fov: 22, aspect: 1.77, filmOffset:1.8}} shadows>               
                    <directionalLight intensity={1.5} position={[5,5,-10]} /> 
                    <directionalLight intensity={1.8} position={[-5,5,-10]} />
                    <directionalLight intensity={1.5} position={[0,5,10]} />
                    <directionalLight intensity={0.5} position={[-10,0,10]} />
                    <OrbitControls />
                    <Layout3D />      
                    <ButtonGoToView gotoView={GoToView}/> 
                    <CameraControls position={position} target={target} />  
                </Canvas>
                <DataContainerLeft />
                <DataContainerRight />
                <ButtonHomeView gotoView={GoToView}/>   
            </Suspense>      
        </div> 
    )
}

export default Dashboard;