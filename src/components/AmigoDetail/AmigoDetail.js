import {connect} from "react-redux";
import {deactivateFriend, blockFriend, deleteFriend} from "../../actions";


const AmigoDetail = ({match, amigos, deactivateFriend, blockFriend, deleteFriend}) => {
    let id = parseInt(match.params.id)
    let amigo = amigos.filter(amigo => amigo.id === id);
    if (amigo.length === 0) {
        return <div>No existe el amigo</div>
    } else {
        amigo = amigo[0];
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className='container mt-5'>
                    <div className="card">
                        <div className="card-header">
                            <strong>Nombre del amigo: </strong>{amigo.name}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Teléfono: </strong>{amigo.phone}</li>
                            <li className="list-group-item"><strong>Email: </strong>{amigo.email}</li>
                            <li className="list-group-item"><strong>Estado: </strong>{amigo.status}</li>
                        </ul>
                        <div className="card-footer">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button onClick={()=>deactivateFriend(amigo.id)} type="button" className="btn btn-warning">Desactivar</button>
                                <button onClick={()=>blockFriend(amigo.id)} type="button" className="btn btn-info">Bloquear</button>
                                <button onClick={()=>deleteFriend(amigo.id)} type="button" className="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {

    return {
        amigos: state
    }
}

export default connect(mapStateToProps, {deactivateFriend, blockFriend, deleteFriend})(AmigoDetail)