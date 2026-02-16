const  BASE_URL = import.meta.env.VITE_API_URL;


// user Endpoints 
export const authEndpoints = {
    SIGN_UP: BASE_URL + "/users/register" ,       //register
    SIGN_IN: BASE_URL+'/users/login' ,    //login 
    GET_USER : BASE_URL+'/users/profile'

}

//Resume endpoints 
export const resumeEndpoints = { 
GET_ALL_RESUMES :  BASE_URL + "/resumes/" ,
GET_RESUME :  BASE_URL + "/resumes",  
CREATE_RESUME :  BASE_URL + "/create" , 
UPDATE_RESUME : BASE_URL + "/resumes/", 
DELETE_RESUME : BASE_URL + "/resumes/" , 

}