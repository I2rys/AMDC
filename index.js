//Dependencies
const Axios = require("axios")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <domain>")
    process.exit()
}

if(!Self_Args[0]){
    console.log("Invalid domain.")
    process.exit()
}


void async function Main(){
    var response = await Axios({
        method: "GET",
        url: "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts"
    })

    response = response.data.split("\n")

    console.log("Checking if the domain is a malware, please wait.")
    for( i in response ){
        if(response[i].indexOf("0.0.0.0") !== -1){
            response[i] = response[i].slice(8, response[i].length)

            if(response[i] === Self_Args[0]){
                console.log("The domain you specified is a malware.")
                process.exit()
            }
        }
    }

    console.log("The domain you specified is not a malware.")
}()