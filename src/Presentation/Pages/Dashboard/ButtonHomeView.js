/* eslint-disable no-lone-blocks */
import annotations from '../../Data/annotations.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ButtonHomeView({gotoView}) {
    return (
    <div id="annotationsPanel">
        <button key={0} className="annotationButton" onClick={() => gotoView(0)}>
        <i><FontAwesomeIcon icon={require("@fortawesome/free-solid-svg-icons")[annotations[0].icon]}/></i>
          {' ' + annotations[0].title} 
        </button>
    </div>
    )
  }

  export default ButtonHomeView;