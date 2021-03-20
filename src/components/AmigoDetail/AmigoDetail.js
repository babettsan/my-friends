

const AmigoDetail = () => {

    return (
        <div className='container'>
            <div className="row">
                <div className="card">
                    <div className="card-header">
                        <strong>Nombre del amigo: </strong>{amigo.name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Teléfono: </strong>{amigo.phone}</li>
                        <li className="list-group-item"><strong>Email: </strong>{amigo.email}</li>
                        <li className="list-group-item"><strong>Estado: </strong>{amigo.status}</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default AmigoDetail