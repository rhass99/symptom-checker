import fs from 'fs'

const allUsers = JSON.parse(fs.readFileSync('./src/db/indexkeys.json', 'utf8'));

allUsers.forEach((user) => {
    if (user.info.sex === "Male") {
        user.info.sex = "male"
    } else {
        user.info.sex = "female"
    }
});

fs.writeFile("./src/db/editedIndex.json", JSON.stringify(allUsers), function(err) {
    if (err) {
        console.log(err);
    }
});