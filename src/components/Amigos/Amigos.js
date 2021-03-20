import { Link } from "react-router-dom";
import { connect } from 'react-redux'

const Amigos = ({ state, amigos }) => {
    let amigosFilter = amigos.filter(amigo => amigo.status === state);
    return (
        <div className='col'>
            <div className="card">
                <div className="card-header">
                    <span>{state}</span>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        amigosFilter.map(amigo =>
                            <Link key={amigo.id} to={`/edit/${amigo.id}`}><li className="list-group-item">{amigo.name}</li></Link>
                            // ejemplo: localhost:3000/edit/1

                        )

                    }
                    {/*<li className="list-group-item">An item</li>*/}
                </ul>
            </div>
        </div>
    )
}
//export  default Amigos;

const mapStateToProps = (state) => {

    return {
        amigos : state
    }
}

export default connect(mapStateToProps, null)(Amigos)