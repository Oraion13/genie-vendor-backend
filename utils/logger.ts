const info = (...parms: Array<string | JSON>) => {
    if (process.env.NODE_ENV != "test") console.log(...parms);
}

const error = (...parms: Array<string | JSON>) => {
    if (process.env.NODE_ENV != "test") console.error(...parms);

}

module.exports = {
    info,
    error
};