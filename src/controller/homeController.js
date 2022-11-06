
class HomeController {

    static test = (req, res) => {
        return res.json({ hehe: 'hehe' })
    }

    static getHome = (req, res) => {
        return res.send('con cac')
    }
}

module.exports = HomeController