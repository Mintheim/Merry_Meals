import axios from 'axios'

class ProductService{
    viewProducts(){
        return axios.get("http://localhost:8080/online/products")
    }

    slackMessage(text){
        return axios.post("http://localhost:8080/webhook/message/Ei", text)
    }
}

export default new ProductService