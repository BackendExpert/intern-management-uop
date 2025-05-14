const InternInfo = require("../model/InternInfor");

const ApplicationController = {
    getallapplications: async (req, res) => {
        try {
            const allapplications = await InternInfo.find()

            return res.json({ Result: allapplications })
        }
        catch (err) {
            console.log(err)
        }
    },

};

module.exports = ApplicationController;