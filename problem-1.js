const request1 = {
    firstName: "Abdullah Al",
    lastName: "Fahad",
    email_address: "abdullahalfahad.bd@gmail.com",
    phone_home: "+8801738916935"
};

const request2 = {
    first_name: "Abdullah Al",
    last_name: "Fahad",
    email_address: "abdullahalfahad.bd@gmail.com",
    phone_home: "+8801738916935"
};

function getRequestData(data) {
    const newData = {};
    Object.keys(data).map(function (key) {
        if (key === "first_name") {
            newData.firstName = data.first_name;
        } else if (key === "last_name") {
            newData.lastName = data.last_name;
        } else {
            newData[key] = data[key];
        }
    });
    return newData;
}