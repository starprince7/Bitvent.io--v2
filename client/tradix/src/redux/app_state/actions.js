import axios from 'axios'
import {
    SET_USER,
    SET_ERROR,
    SET_LOADING,
    CLEAR_ERROR
} from './actionTypes'


function setLoading(boolean) {
    return {
        type: SET_LOADING,
        payload: boolean
    }
}

function setError(e) {
    return {
        type: SET_ERROR,
        payload: e
    }
}

function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export function clearError() {
    return {
        type: CLEAR_ERROR
    }
}

export const logUserIn = (user) => {
    const options = {
        email: user.email,
        password: user.password
    }
    
    return (dispatch) => {
        // Start Loader!
        dispatch(setLoading(true))
        
        axios.post('/login', options)
        .then(response => {
            console.log(response.data)
            if (response.data.user) {
                // Set user to Local-Storage.
                localStorage.setItem("user", JSON.stringify(response.data.user._id))
                
                // wait half a sec.
                // User ID should be saved Now!
                setTimeout(() => {
                    if (response.data.user.role === 'customer') {
                        window.location.assign('/dashboard');
                    } else if(response.data.user.role === 'admin') {
                        window.location.assign('/admin_dashboard');
                    }
                }, 500)
            }

            if (response.data.error) {
                dispatch(setError(response.data.error))
            }
        })
        .catch(e => {
            console.log(e)
            dispatch(setError("Sorry could not reach server! try again."))
        })
    }
}



export const fetchUser = () => {
    return (dispatch, getState) => {
        // Loader
        dispatch(setLoading(true))

        // authenticate App with Server!
        axios.get("/verify-cookie")
        .then(response => {
            if (response.data.redirect) {
                alert("Session expired, Please login!")
                window.location.assign(response.data.redirect)
            }
        })
        .catch(e => {
            console.log(e)
        })

        // Async Here!
        // grab user ID from localStorage.
        // Try-catch for Privacy settings restriction.
        try {
            const user = localStorage.getItem("user")
            // console.log('I have the user ID >>>',  user)
            // console.log('I have the user ID >>>',  JSON.parse(user))

            if (user) {
                const userId = JSON.parse(user);

                if (userId !== undefined) {
                    axios.get(`admin/customer/${userId}`)
                    .then((response) => {
                        // Now 'dispatch' this
                        // data to the App State!
                        // After condition.
                        if (!response.data.redirect) {
                            console.log("From Thunk Action creator!!!", response.data)
                            dispatch(setUser(response.data.customer))
                            // dispatch(setLoading(false))
                        } else {
                            window.location.assign(response.data.redirect);
                        };
                    })
                }
                    
            } else return
            
        } catch (e) {
            console.log(e)
        }
        
    }
}

export const RegisterUser = (object) => {
    return (dispatch) => {
        // set Loader.
        dispatch(setLoading(true))

        // Grab form fields.
        const option = {
            name: object.name,
            lastname: object.lastname,
            username: object.username,
            email: object.email,
            password: object.password,
            confirmPassword: object.confirmPassword
        }
        
        // Check if passwords match
        // then post onMatchSuccess.
        if (option.confirmPassword === option.password) {
            // 
            axios.post('/signup', option)
                .then(response => {
                    console.log(response.data)

                    // Server userID response
                    if (response.data.user) {
                        // stop loader
                        dispatch(setLoading(false))
                        localStorage.setItem("user", JSON.stringify(response.data.user))
                        setTimeout(() => {
                            window.location.assign('/dashboard');
                        }, 600)
                    }
                    // Server error response
                    if (response.data.error) {
                        dispatch(setError(response.data.error))
                    }
                    
                })
                .catch(e => {
                    console.log(e);
                    dispatch(setError(e))

                })
        } else {
            // Here Passwords Do not match
            dispatch(setError("Sorry passwords do not match!"))
        }
    }
}