import React from 'react';

const Addusers = () => {
    const [input, setInput] = React.useState({
        name: '',
        phone:'',
        email:''
    });

    function hadleSumbit(e){
        e.preventDefault();
    }

    function handleOnChange(event) {

        setInput({
            ...input,
            //name : 'pedro'
            [event.target.name] : event.target.value
        })
    }

    return(
        <form className="form-floating mt-5 ms-5 me-5" onSubmit={hadleSumbit}>
            <div className="form-floating mb-3">
                <input value={input.name} name='name' type="text" className="form-control" id="name" placeholder="Friend name" onChange={handleOnChange}/>
                <label htmlFor="name">Friend name</label>
            </div>
            <div className="form-floating mb-3">
                <input value={input.phone} name='phone' type="text" className="form-control" id="phone" placeholder="Friend phone" onChange={handleOnChange} />
                <label htmlFor="phone">phone</label>
            </div>
            <div className="form-floating mb-3">
                <input value={input.email} name='email' type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleOnChange}/>
                <label htmlFor="email">Email address</label>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-success mb-3">Save friend</button>
            </div>
        </form>
    )
}

export default Addusers;