module.exports = class Agenda extends Array
{
    add(node)
    {
        this.push(node)
    }

    getNode()
    {
        return this.reverse().shift()
    }

    notEmpty()
    {
        return this.length !== 0
    }
}