export const getAllUsers = async (page) => {
    let payload = null;
    try {
        let users = await fetch(`https://reqres.in/api/users?page=${page}`);
        payload = await users.json();
    }
    catch (err) {
        console.error(err);
    }


    return {
        type: "USERS",
        payload: payload.data
    }
}

export const getUserDetails = async (id) => {
    let payload = null;
    try {
        let user = await fetch(`https://reqres.in/api/users/${id}`);
        payload = await user.json();
    }
    catch (err) {
        console.error(err);
    }

    return {
        type: "USER_DETAILS",
        payload: payload.data
    }
}

export const createUser = async (name, job) => {
    let payload = null;
    try {
        let user = await fetch(`https://reqres.in/api/users/`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, job })
        });
        payload = await user.json();
    }
    catch (err) {
        console.error(err);
    }
    console.log(payload);
    return {
        type: "CREATE_USER",
        payload: payload
    }
}