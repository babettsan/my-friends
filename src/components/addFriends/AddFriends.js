import React from 'react';
import { connect } from 'react-redux'
import { addFriend } from "../../actions";


// const AddFriends = ( { guardarAmigo }) => {
const AddFriends = ( { addFriend , amigos}) => {
    const [amigo, setAmigo] = React.useState({
        name: '',
        phone:'',
        email:''
    });

    function hadleSumbit(e){
        e.preventDefault();
        addFriend(amigo)
        setAmigo({
            name: '',
            phone:'',
            email:''
        })

    }

    function handleOnChange(event) {

        setAmigo({
            ...amigo,
            [event.target.name] : event.target.value
        })
    }

    return(
        <form className="form-floating mt-5 ms-5 me-5" onSubmit={hadleSumbit}>
            <div className="form-floating mb-3">
                <input value={amigo.name} name='name' type="text" className="form-control" id="name" placeholder="Friend name" onChange={handleOnChange}/>
                <label htmlFor="name">Friend name</label>
            </div>
            <div className="form-floating mb-3">
                <input value={amigo.phone} name='phone' type="text" className="form-control" id="phone" placeholder="Friend phone" onChange={handleOnChange} />
                <label htmlFor="phone">phone</label>
            </div>
            <div className="form-floating mb-3">
                <input value={amigo.email} name='email' type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleOnChange}/>
                <label htmlFor="email">Email address</label>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-success mb-3">Save friend</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        amigos : state
    }
}

// (null,{ addFriend })

// export default AddFriends;

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         guardarAmigo: friend => dispatch(addFriend(friend))
//     }
// }

// export default connect(null,mapDispatchToProps )(AddFriends)

export default connect(mapStateToProps, { addFriend } )(AddFriends)