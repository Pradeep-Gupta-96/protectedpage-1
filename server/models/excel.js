import mongoose from "mongoose"

const excelSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    xlData: [{
        Notice: {
            type: String,
            required: true
        },
        DATE: {
            type: String,
            required: true
        },
        ACCOUNT: {
            type: String,
            required: true
        },
        CARDNO: {
            type: String,
            required: true
        },
        FPR_NAME: {
            type: String,
            required: true
        },
        FPR_LD_LIN: {
            type: Number,
            required: true
        },
        FPR_MOB: {
            type: String,
            required: true
        },
        EMBONAME: {
            type: String,
            required: true
        },
        ADDRESS1: {
            type: String,
            required: true
        },
        ADDRESS2: {
            type: String,
            required: true
        },
        CITY: {
            type: String,
            required: true
        },
        STATE: {
            type: Number,
            required: true
        },
        PINCODE: {
            type: String,
            required: true
        },
        NEWRISKREGION: {
            type: String,
            required: true
        },
        NEW_CURR : {
            type: String,
            required: true
        },
        RISKCLASS: {
            type: String,
            required: true
        },
        BLOCK1: {
            type: String,
            required: true
        },
        BLOCK2: {
            type: Number,
            required: true
        },
        ZONE: {
            type: String,
            required: true
        },
        SENDER : {
            type: String,
            required: true
        },
        BKT: {
            type: String,
            required: true
        },
        MOBILEPHONE_HOME: {
            type: String,
            required: true
        },
        TRIGGER: {
            type: Number,
            required: true
        },
        ACTIVITY: {
            type: String,
            required: true
        },
        STAGE : {
            type: String,
            required: true
        },
        DPI_Amount: {
            type: String,
            required: true
        },
        Cur : {
            type: String,
            required: true
        },
        Notice: {
            type: Number,
            required: true
        },
        E: {
            type: String,
            required: true
        },
        CASE: {
            type: String,
            required: true
        },
        REF_NO : {
            type: String,
            required: true
        },
        NAME_OF_ARBITRATOR : {
            type: Number,
            required: true
        },
        ADDRESS_OF_ARBITRATOR1 : {
            type: String,
            required: true
        },
        ADDRESS_OF_ARBITRATOR2: {
            type: String,
            required: true
        },
        CITY: {
            type: String,
            required: true
        },
        PINCODE_ARB : {
            type: String,
            required: true
        },
        DATE_ARB : {
            type: Number,
            required: true
        },
        TIME_ARB  : {
            type: String,
            required: true
        },
        MEETING_LINK: {
            type: String,
            required: true
        },
        MEETING_PASSWORD: {
            type: String,
            required: true
        },
        MEETING_ID : {
            type: String,
            required: true
        },
        NOTICE_DATE : {
            type: Number,
            required: true
        },
        NAME_OF_CONCILIATOR : {
            type: String,
            required: true
        },
        DATE_OF_CONCILIATION: {
            type: String,
            required: true
        },
        TIMING_OF_CONCILIATION: {
            type: String,
            required: true
        },
    }],
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
}, { timestamps: true });

const Excel = new mongoose.model("Excel", excelSchema)

export default Excel



