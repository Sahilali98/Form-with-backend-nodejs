function FormValidation(values){
    let error = {};
    // const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\. [a-zA-Z]{2,}$/;
    if(values.name === ""){
        error.name = "Name should not be empty";
    }
    else{
        error.name = ""
    }

    if(values.email === ""){
        error.email = "Name should not be empty";
    }
    // else if(!email_pattern.test(values.email)){
    //     error.email = "Email Didn't match";
    // }
    else{
        error.email = "";
    }

    if(values.password === ""){
        error.password = "Password shouldn't be empty";

    }
    else{
        error.password = "";
    }

    if(values.password2 ===  ""){
        error.password2 = "Password shouldn't be empty";
    }
    else if(values.password !== values.password2){
        error.password2 = 'Password shouldn"t matched';
    }
    else{
        error.password2 = "";
    }

    if(values.phon === ""){
        error.phon = 'Number shouldn"t be empty';
    }
    else{
        error.phon = '';
    }

    if(values.branch === ""){
        error.branch = 'branch shouldn"t be empty';
    }
    else{
        error.branch = '';
    }

    if(values.gender===''){
        error.gender = 'gender not be empty';
    }
    else{
        error.gender = '';
    }

    return error;
}
export default FormValidation;