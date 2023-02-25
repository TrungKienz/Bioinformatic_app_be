const normalLungRouter = require('./normalGene/normalLungGene');
const normalBreastRouter = require('./normalGene/normalBreastGene');
const normalColorectalRouter = require('./normalGene/normalColorectalGene');
const normalLiverRouter = require('./normalGene/normalLiverGene');
const normalThyroidRouter = require('./normalGene/normalThyroidGene');

const mutationLungRouter = require('./mutationGene/mutationLungGene');
const mutationBreastRouter = require('./mutationGene/mutationBreastGene');
const mutationColorectalRouter = require('./mutationGene/mutationColorectalGene');
const mutationLiverRouter = require('./mutationGene/mutationLiverGene');
const mutationThyroidRouter = require('./mutationGene/mutationThyroidGene');

const drugInformationRouter = require('./DrugInformation');

function routes(app) {
    app.use('/normal-lung-gene', normalLungRouter);
    app.use('/normal-breast-gene', normalBreastRouter);
    app.use('/normal-colorectal-gene', normalColorectalRouter);
    app.use('/normal-liver-gene', normalLiverRouter);
    app.use('/normal-thyroid-gene', normalThyroidRouter);

    app.use('/mutation-lung-gene', mutationLungRouter);
    app.use('/mutation-breast-gene', mutationBreastRouter);
    app.use('/mutation-colorectal-gene', mutationColorectalRouter);
    app.use('/mutation-liver-gene', mutationLiverRouter);
    app.use('/mutation-thyroid-gene', mutationThyroidRouter);

    app.use('/drugs-information', drugInformationRouter);
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
}

module.exports = routes;
