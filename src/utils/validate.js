
export const checkValidData = (email, password, name) => {
    const isemailValid = /^[a-zA-Z0-9_.+-]+[\x40][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[\\p{L} .'-]+$/.test(name);

    if(!isemailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not Valid";
    if(!isNameValid) return "Name is not Valid";
}