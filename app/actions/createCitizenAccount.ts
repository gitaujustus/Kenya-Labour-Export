
"use server"
const createCitizenAccount = (formData:FormData) => {

    if (formData) {
        console.log(formData.get("kra"));
}
// redirect user to /user/profile
return "/user/profile"


}
export default createCitizenAccount;