import annotations from '../../Data/annotations.json'
import { Html } from '@react-three/drei';

function ButtonGoToView({gotoView}) {
    return (
      <>
        {annotations.map((a, i) => {
          {if(i>0){
            return (
              <Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
                <svg height="34" width="34" transform="translate(-16 -16)" style={{ cursor: 'pointer' }}>
                  <circle cx="17" cy="17" r="16" stroke="white" strokeWidth="2" fill="rgba(0,0,0,.66)" onClick={() => gotoView(i)} />
                  <text x="12" y="22" fill="white" fontSize={17} fontFamily="monospace" style={{ pointerEvents: 'none' }}>
                    {i}
                  </text>
                </svg>
              </Html>
            )
          }}
        })}
      </>
    )
}

export default ButtonGoToView;