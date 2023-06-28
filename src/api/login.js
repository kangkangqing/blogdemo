import service from "@/utils/require";


export default {
    login(data){
    return service.post('login',data)
    }
}