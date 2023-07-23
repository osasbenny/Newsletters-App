const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
//const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");

})

app.post("/", function (req, res) {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
}

    var data = {

    const client = require("@mailchimp/mailchimp_marketing");

    client.setConfig({
        apiKey: "c79c044d67bc6c7f29b25352edce9bdc-us21",
        server: "us21",
    });

    const run = async () => {
        const response = await client.lists.batchListMembers("list_id", {
            members: [{
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    First Name: fName
                    Last Name: lName
                }
            }],
        });
        console.log(response);
    };

    run();



    var jsonData = JSON.stringify(data);

    var option = {
        url: "https://us21.api.mailchimp.com/3.0/lists/b7feeb4a87",

        method: "POST",
        headers: {
            "Authorization": "20230723:c79c044d67bc6c7f29b25352edce9bdc-us21"
        },
        body: jsonData
    };

    request(option, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode);
        }
    });
});
app.listen(3000, function () {
    console.log("server is running on port 3000");
});




//members: [{
//  email_address: email,
//status: "subscribed",
//merge_fields: {
//  FNAME: firstName,
//LNAME: lastName,
//EMAIL: email,
// }
/*
// Converting string data to JSON data
const jsonData = JSON.stringify(data);
const
const options = {
    method: "POST",
    auth: "201951173:c79c044d67bc6c7f29b25352edce9bdc-us21"
}

// On success send users to success, otherwise on failure template
const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
    } else {
        res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function (data) {
        console.log(JSON.parse(data));
    });
});
request.write(jsonData);
request.end();
});

// Failure route
app.post("/failure", function (req, res) {
res.redirect("/"); */



//c79c044d67bc6c7f29b25352edce9bdc-us21//
//List id: b7feeb4a87//

/*client.setConfig({
    apiKey: "c79c044d67bc6c7f29b25352edce9bdc-us21",
    server: "us21",
});

const run = async () => {
    const response = await client.lists.createList({
        name: "name",
        permission_reminder: "permission_reminder",
        email_type_option: true,
        contact: {
            company: "company",
            address1: "address1",
            city: "city",
            country: "country",
        },
        campaign_defaults: {
            from_name: "from_name",
            from_email: "from_email",
            subject: "subject",
            language: "language",
        },
    });
    console.log(response);
};

run(); */
