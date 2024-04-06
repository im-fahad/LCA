const acceptedValues = ["hockins", "umbrella", "toxic", "renal", "toxicity"];

const example1 = {
    "first_name": "john",
    "last_name": "doe",
    "email": "john@gmail.com",
    "phone": "(433)-323-4455",
    "injury": "regardless"
};
const example2 = {
    "campaign": "ABCD",
    "payload": {
        "first_name": "hockins",
        "last_name": "doe",
        "email": "john@gmail.com",
        "phone": "(433)-323-4455",
        "injury": "regardless"
    }
};

function getMatchValue(values, payload) {
    const data = JSON.stringify(payload);
    let hasData = false;
    values.map(value => {
        if (data.includes(value)) {
            hasData = true;
        }
    });
    return hasData;
}