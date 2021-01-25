let express = require ('express')
let path = require ('path')
let app = express ()

app.get('/Adventure', function(request,response){
    response.sendFile(path.join(_dirname, 'Adventure.html'))

}
)

app.get('/RegisterCompany', function(request,response){
    response.sendFile(path.join(_dirname, 'RegisterCompany.html'))

}
)

app.get('/BuyPrivateJet', function(request,response){
    response.sendFile(path.join(_dirname, 'BuyPrivateJet.html'))

}
)
app.listen (8080)