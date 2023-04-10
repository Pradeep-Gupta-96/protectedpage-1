import Excel from "../models/excel.js";
import XLSX from 'xlsx'

export const getexceldata = async (req, res) => {
    try {
        const data = await Excel.find()
        return res.status(200).json({ message: data })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const postexceldata = async (req, res) => {
    try {
        const { filename } = req.body
        var workbook = XLSX.readFile(req.file.path)
        var sheet_Namelist = workbook.SheetNames;
        var x = 0
        sheet_Namelist.forEach(element => {
            var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_Namelist[x]]);
            Excel.insertMany({
                filename,
                xlData
            })
            x++;
        })
        return res.json({ status: 200, success: true, msg: 'running' })
    } catch (error) {
        res.send({ status: 500, success: false, msg: error.message })
    }
}

