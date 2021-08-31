import { connect } from 'react-redux';
import { buttons } from '../store.js';

const Calculator = ({ textUp, textDown, changeText }) => {
  return (
    <div id="calculator">
        <div id="display1" className="display up">{textUp}</div>
        <div id="display" className="display down">{textDown}</div>
        <div className="buttons">
            { 
            buttons.map((b, i) => (
                <button 
                    key={i} 
                    id={b.id} 
                    style={{"background": b.color}}
                    onClick={()=>changeText(b.name)} 
                    >
                    {b.name}
                </button>
                )
            )
            }
        </div>
    </div>
  )
};

const mapStateToProps = state => ({
  textUp: state.textUp,
  textDown: state.textDown
});

const mapDispatchToProps = dispatch => ({
    changeText(btn) {
        dispatch({
            type: 'NEW_ELEMENT',
            button: btn
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);