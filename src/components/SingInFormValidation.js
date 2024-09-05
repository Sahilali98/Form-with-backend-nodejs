function SingInFormValidation(values) {
    let error = {};


    if (values.email === "") {
        error.email = "Name should not be empty";
    }
    // else if(!email_pattern.test(values.email)){
    //     error.email = "Email Didn't match";
    // }
    else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password shouldn't be empty";

    }
    else {
        error.password = "";
    }

    return error;

}

export default SingInFormValidation
