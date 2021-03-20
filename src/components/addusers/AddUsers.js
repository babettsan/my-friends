import React from 'react';

const Addusers = () => {
    const [input, setInput] = React.useState({
        name: '',
        phone:'',
        email:''
    });

    function hadleSumbit(e){
        e.preventDefault()
    }

    return(
        <form className="form-floating mt-5 ms-5 me-5" onSubmit={hadleSumbit}>
            <div className="form-floating mb-3">
                <input name='name' type="text" className="form-control" id="name" placeholder="Friend name"/>
                <label htmlFor="name">Friend name</label>
            </div>
            <div className="form-floating mb-3">
                <input name='phone' type="text" className="form-control" id="phone" placeholder="Friend phone" />
                <label htmlFor="phone">phone</label>
            </div>
            <div className="form-floating mb-3">
                <input name='email' type="email" className="form-control" id="email" placeholder="name@example.com"/>
                <label htmlFor="email">Email address</label>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-success mb-3">Save friend</button>
            </div>
        </form>
    )
}

export default Addusers;