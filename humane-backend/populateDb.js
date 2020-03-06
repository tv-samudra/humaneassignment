let Contacts = require("./models/Contacts");
let History = require("./models/History");
/**Contacts */
(async () => {
    let merchantList = [
        "Samudra", "Sam", "Ankit", "Ankur", "Pritam", "Krishna"
    ]
    let itemList = ["Tv", "Fan", "Phone", "Refrigerator", "Purifier", "Bag", "Laptop", "Charger"];

    /**Generate a random number */
    let randNum = num => Math.floor(Math.random() * num + 1);
    /**Generate a random string */
    let randString = _ => Math.random().toString(32).substring(7);

    let randomFromArray = (array) => array[Math.floor(Math.random() * array.length)];

    /**Populate the items array */
    function generateItemsArray() {
        let numberOfItemsToFill = randNum(5);
        console.log({ numberOfItemsToFill })
        let items = [];
        for (let i = 0; i < numberOfItemsToFill; i++) {
            items.push(randString());
        }
        console.log({ items })
        return items
    }

    let contacts = await Contacts.count();
    if (!contacts) {
        let data = [{
            name: "Samudra",
            title: "MERN Stack Developer",
            company: "Tech Variable",
            address: "Satgaon",
            industry: "Information Technology"
        }, {
            name: "Sam",
            title: "MERN Stack Developer",
            company: "Tech Variable",
            industry: "Information Technology",
            address: "Satgaon"
        }, {
            name: "Ankit",
            title: "MERN Stack Developer",
            company: "Tech Variable",
            industry: "Information Technology",
            address: "Chandmari"
        }, {
            name: "Ankur",
            title: "MERN Stack Developer",
            company: "Tech Variable",
            industry: "Information Technology",
            address: "Chandmari"
        }, {
            name: "Pritam",
            title: "MERN Stack Developer",
            company: "Tech Variable",
            industry: "Information Technology",
            address: "Six mile"
        }, {
            name: "Krishna",
            title: "MERN Stack Developer",
            company: "Tech Variable",
            industry: "Information Technology",
            address: "Satgaon"
        }]
        await Contacts.create(data);
    }

    /**
     * History
     */
    let history = await History.count();
    if (!history) {
        for (let i = 0; i < 6; i++) {
            await History.create({
                itemPurchased: randomFromArray(itemList),
                amount: randNum(1000),
                merchant: randomFromArray(merchantList)
            })
        }
    }

})();
