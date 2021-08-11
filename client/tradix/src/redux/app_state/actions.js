import axios from 'axios'
import {
    SET_USER,
    SET_USERS,
    SET_ERROR,
    SET_LOADING,
    SET_INVOICE,
    CLEAR_ERROR,
    SET_WITHDRAW_REQUEST
} from './actionTypes'


function setWithdrawRequest(request_data) {
    return {
        type: SET_WITHDRAW_REQUEST,
        payload: request_data
    }
}

export function setLoading(boolean) {
    return {
        type: SET_LOADING,
        payload: boolean
    }
}

export function setError(e) {
    return {
        type: SET_ERROR,
        payload: e
    }
}

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        payload: users
    }
}

export function clearError() {
    return {
        type: CLEAR_ERROR
    }
}

export const setInvoice = (options) => {
    return {
        type: SET_INVOICE,
        payload: options
    }
}

export const logUserOut = () => {
    return (dispatch) => {
        axios.get('/logout')
       .then(response => {
           localStorage.removeItem('user')
           window.location.assign('/login')
       })
       .catch(e => {
           alert("ERR! in Log Out!")
           console.log("logout ERROR", e)
       })
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


export const fetchAllUsers = () => {
    return (dispatch, getState) => {
        dispatch(setLoading(true))

    axios
      .get("/admin/all-customers")
      .then((result) => {
        // console.log(result);
        // console.log(result.data);
        dispatch(setUsers(result.data));
        dispatch(setLoading(false));

      })
      .catch((error) => {
        console.log("ERR! Getting All Customers", error);
        dispatch(setUsers(null));
        dispatch(setLoading(false));

      });
    }
}



export const fetchUser = () => {
    return (dispatch, getState) => {
        // Loader
        dispatch(setLoading(true))

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
                            // console.log("From Thunk Action creator!!!", response.data)
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


export const checkAmount = (amount, plan) => {
    return (dispatch) => {
        // setOnChangeAmount(e.target.value)

    // Clear Error here
    dispatch(clearError())    
    
        // err msg.
        const error_msg = 'Invalid amount for your selected plan.'

        switch (plan) {
            case "Start-up Plan":
                // console.log("START-UP PLAN")
                if (amount > 5000) {
                    dispatch(setError(error_msg));
                } else if (amount < 500) {
                    dispatch(setError(error_msg));
                }

                break;
            case "Business Plan":
                // console.log("BUSINESS PLAN")
                if (amount > 15000) {
                    dispatch(setError(error_msg));
                } else if (amount < 6000) {
                    dispatch(setError(error_msg));
                }

                break;
            case "Corporate Plan":
                // console.log("CORPOPRATE PLAN")
                if (amount > 50000) {
                    dispatch(setError(error_msg));
                } else if (amount < 16000) {
                    dispatch(setError(error_msg));
                }

                break;
            case "5-Star-Corporate Plan":
                // console.log("5-STAR-CORPORATE PLAN")
                if (amount < 51000) {
                    dispatch(setError(error_msg));
                }

                break;
            default:
        }
    }
  };

  export const fetchWithdrawRequest = () => {
      return (dispatch) => {
        axios
        .get("/admin/request")
        .then((result) => {
            dispatch(setWithdrawRequest(result.data));     
        })
        .catch((error) => {
            console.log("ERR! Fetching Customer Request ==>", error);

        });
  
      }
  }