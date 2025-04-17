import ReactDOM from 'react-dom' ;

const Portal = () => {

  return ReactDOM.createPortal(
     <div>Hello Portal</div>,
     document.getElementById('protal-root')
  )
}

export default Portal