import fetch from "node-fetch";
class ResourceCaller {  //a resourceCaller class with URL property with a constructor to assign the value to it
  constructor(url) {
    this.URL = url;
  }

async externalApiCall() {  //An async method to call the URL using fetch API & return the response.
  let response = await fetch(this.URL); //getting the response from API
  return response;
}
}
class Caller extends ResourceCaller { //child class extending ResourceCaller class withn parent properties
  constructor(url) {
    super(url);
  }
async getRequiredResponse() {       // method to return the mapped response
  try {
    let Response = await this.externalApiCall();
    let jsonObject = await Response.json(); //converting the response frpm API in json format
   // console.log(jsonObject)
    let dataArray = jsonObject.data;//getting data array from json response
    let extractedObject = dataArray.map(element => { //returning required details
      return {
        "id": element.id,
        "email": element.email,
        "firstName": element.first_name,
        "lastName": element.last_name
      }
    });
    return extractedObject;
  }
  catch (error) {
    console.log(error)
  }
}
}
let requiredResponse = new Caller('https://reqres.in/api/users');
let dataResult=await requiredResponse.getRequiredResponse()
console.log(dataResult);
