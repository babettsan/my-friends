

const Addusers = () => {

    return(
        <form className="form-floating mt-5 ms-5 me-5">
            <div className="form-floating mb-3">
                <input name='name' type="text" className="form-control" id="name" placeholder="Friend name"/>
                <label htmlFor="name">Friend name</label>
            </div>
            <div className="form-floating mb-3">
                <input name='phone' type="text" className="form-control" id="phone" placeholder="Friend phone" />
                <label htmlFor="phone">phone</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
            </div>
        </form>
    )
}

export default Addusers;