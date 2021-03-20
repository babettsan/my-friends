export const ADD_FRIEND = 'ADD_FRIEND';
export const DEACTIVATE_FRIEND = 'DEACTIVATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const BLOCK_FRIEND = 'BLOCK_FRIEND';

let id = 1

/*
{
    name
    email
    phone

}
 */

                         // esto recibe un objeto
export const addFriend = (amigo) =>{

    return {
        type: ADD_FRIEND,
        payload: {
            id: id++,
            name: amigo.name,
            phone: amigo.phone,
            email:amigo.email,
            status: 'Active'
        }
    }

}

export const deactivateFriend = (id) =>{

    return {
        type: DEACTIVATE_FRIEND,
        payload: id
    }

}

export const deleteFriend = (id) =>{

    return {
        type: DELETE_FRIEND,
        payload: id
    }

}

export const blockFriend = (id) =>{

    return {
        type: DEACTIVATE_FRIEND,
        payload: id
    }

}