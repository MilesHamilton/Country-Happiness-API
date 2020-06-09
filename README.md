# Country Happiness Data RESTFUL API

These are bare-bones intructions on how to CRUD the data

## Run the app

navigate to the APP via browser or Postman [here]('https://enigmatic-temple-08680.herokuapp.com/')

## Run the tests

# REST API

The REST API to the example app is described below.

## Get list of Things

### Request

`GET /thing/number or string`



### Ex. Response

        _id: "5edbd5e8d35b5e7eca0d39d0",
    Overall rank: 3,
    Country or region: "Norway",
    Score: 7.554,
    GDP per capita: 1.488,
    Social support: 1.582,
    Healthy life expectancy: 1.028,
    Freedom to make life choices: 0.603,
    Generosity: 0.271,
    Perceptions of corruption: 0.341,
    __v: 0

## Create a new Thing

### Request

`POST /thing/number or string`


### Ex. Response

        _id: "5edbd5e8d35b5e7eca0d39d0",
    Overall rank: 3,
    Country or region: "Norway",
    Score: 7.554,
    GDP per capita: 1.488,
    Social support: 1.582,
    Healthy life expectancy: 1.028,
    Freedom to make life choices: 0.603,
    Generosity: 0.271,
    Perceptions of corruption: 0.341,
    __v: 0  

    {"id":1,"name":"Foo","status":"new"}

## Get a specific Thing

### Request



`DELETE /thing/`

### Response
    _id: "5edbd5e8d35b5e7eca0d39d0",
    Overall rank: 3,
    Country or region: "Norway",
    Score: 7.554,
    GDP per capita: 1.488,
    Social support: 1.582,
    Healthy life expectancy: 1.028,
    Freedom to make life choices: 0.603,
    Generosity: 0.271,
    Perceptions of corruption: 0.341,
    __v: 0

    DELETED
