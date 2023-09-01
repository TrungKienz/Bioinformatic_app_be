const MedicineModel = require('../models/MedicineModel');

class MedicineController {
    async findAll(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;

            const count = await MedicineModel.countDocuments({});
            const medicineData = await MedicineModel.find({})
                .skip(skip)
                .limit(limit);

            const totalPages = Math.ceil(count / limit);
            console.log(medicineData.medicine);
            const resData = {
                currentPage: page,
                totalPages,
                medicineModels: medicineData.map((medicineModel) => ({
                    _id: medicineModel._id,
                    geneName: medicineModel.geneName,
                    mutation: medicineModel.mutation,
                    medicine: medicineModel.medicine,
                    valence: medicineModel.valence,
                    responseMedication: medicineModel.responseMedication,
                    therapyRank: medicineModel.therapyRank,
                    priority: medicineModel.priority,
                    drugLicensing: [
                        medicineModel.VN != '0' && medicineModel.VN
                            ? 'VietNam'
                            : '',
                        medicineModel.FDA === 'x' ? 'FDA' : '',
                        medicineModel.otherOrganization
                            ? medicineModel.otherOrganization
                            : '',
                        medicineModel.clinicalTrials ? 'clinicalTrials' : '',
                    ],
                    references: medicineModel.references,
                    note: medicineModel.note,
                })),
            };

            res.json(resData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred.' });
        }
    }
}

module.exports = new MedicineController();
