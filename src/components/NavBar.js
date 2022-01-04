import React, { Fragment } from 'react';

// class NavBar extends React.Component {
//     render () {
//         const costumStyle = {
//             backgroundColor: "grey",
//             padding: 10,
//             fontFamily: "Arial",
//             color: "black",
//             fontSize: "25px"
//         }

//         return (
//             <div style={costumStyle}>Menú</div>
//         )
            
        
//     }
// }

const NavBar = (props) => {
    const costumStyle = {
                    backgroundColor: "white",
                    padding: 20,
                    fontFamily: "Pushster, cursive",
                    color: "black",
                    fontSize: "35px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                }
        
                return <Fragment>
                    <div style={costumStyle}><h1 style={{color: "#7EB488", display: "flex", }}>{props.mensaje}</h1>
                        <div className="customList">
                            <button>
                                <a href='#'>Inicio</a>
                            </button>
                            <button>
                                <a href='#'>Productos</a>
                            </button>
                            <button>
                                <a href='#'>Contacto</a>
                            </button>
                            <button>
                                <a href='#' style={{color:"#7EB488"}}><b>Mi cuenta</b></a>
                            </button>
                        </div>
                    </div>
                </Fragment>
                
}

export default NavBar;