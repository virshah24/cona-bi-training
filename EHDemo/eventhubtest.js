var broker   = require('./eventhubclient_vnet');
var timeStamp = new Date().toISOString();
var data = {
    "bottlerId":"all",
    "VSANL": " ",
    "ABFER": "2",
    "TNDR_TEXT": " ",
    "LAUFK": "4",
    "DAREG": "20180419",
    "DPLEN": "20180420",
    "TNDR_CARR": " ",
    "TNDR_ACTP": "0.00",
    "/LOT/SC_EQ_TRU2": " ",
    "/LOT/SC_DIPRDR": " ",
    "tableName": "VTTK",
    "MANDT": "100",
    "DPTEN": "20180420",
    "FAHZTD": "0",
    "TNDR_ACTC": " ",
    "UPABF": "000000",
    "id": "3020e8fc-08d1-4772-8cd5-1d685a260ad9",
    "FAHZT": "0.00",
    "KKALSM": " ",
    "TDLNR": " ",
    "STTBG": " ",
    "DATBG": "00000000",
    "UALEN": "023927",
    "GESZT": "0.00",
    "STLBG": "X",
    "DALBG": "20180419",
    "WARZTDA": "0",
    "UPREG": "000000",
    "TNDRST": " ",
    "/LOT/SC_SHIPMIND": " ",
    "/SCL/PTS_STATUS": " ",
    "ROCPY_DONE": " ",
    "STTRG": "4",
    "CONT_DG": " ",
    "VSAVL": " ",
    "TNDR_ERPD": "00000000",
    "VERURSYS": " ",
    "DTDIS": "20180419",
    "EXTI1": " ",
    "UATEN": "000000",
    "FBSTA": " ",
    "EXTI2": " ",
    "UATBG": "000000",
    "SHTYP": "Z010",
    "STTEN": " ",
    "TERNR": " ",
    "PROLI": " ",
    "TNDR_ERPT": "000000",
    "UALBG": "023704",
    "VLSTK": " ",
    "TKNUM": "0006523031",
    "/LOT/SC_TOUR_ID": " ",
    "ERZET": "072014",
    "/LOT/SC_PLAN_NO": " ",
    "DTABF": "00000000",
    "MEDST": " ",
    "TNDR_LTPD": "00000000",
    "AEZET": "073927",
    "UPTEN": "000000",
    "FBGST": " ",
    "TNDR_MAXC": " ",
    "UZABF": "000000",
    "ERDAT": "20180419",
    "FAHZTDA": "0",
    "TNDR_MAXP": "0.00",
    "TNDR_LTPT": "000000",
    "TEXT1": " ",
    "TEXT2": " ",
    "VSBED": " ",
    "DPLBG": "20180420",
    "TEXT3": " ",
    "TNDRDAT": "00000000",
    "/VSO/R_STATUS": " ",
    "AEDAT": "20180419",
    "TEXT4": " ",
    "DPTBG": "20180420",
    "STAFO": " ",
    "DGMDDAT": "00000000",
    "TPLST": "M000",
    "/LOT/SC_VSTEL": " ",
    "FRKRL": " ",
    "TNDRRC": " ",
    "VPID": " ",
    "UZDIS": "022000",
    "ROUTE": " ",
    "EXT_TM_SYS": " ",
    "ABWST": "1",
    "VSART": "01",
    "DALEN": "20180419",
    "STERM": "1",
    "/LOT/SC_DTMODE": " ",
    "/SCL/COMXDCK": " ",
    "DPREG": "20180420",
    "TNDRZET": "000000",
    "VPTYP": " ",
    "DISTZ": "0.000",
    "TSEGTP": "WSHDRSTDTR",
    "ARSTA": " ",
    "TNDR_TRKID": " ",
    "VSE_FRK": " ",
    "CM_SEQUENCE": "0000",
    "/LOT/SC_TOUR_SEQ": "0000",
    "SIGNI": " ",
    "/BEV1/RPMOWA": " ",
    "UAREG": "023701",
    "PKSTK": " ",
    "/LOT/SC_EQ_TRA2": " ",
    "UPLEN": "000000",
    "/LOT/SC_FX_ROUTE": " ",
    "R_DateTime": "2019-05-24 21:26:04.944",
    "ARGST": " ",
    "WARZTD": "0",
    "GESZTDA": "0",
    "TNDR_CRNM": " ",
    "layerName": "STAGE",
    "BFART": "1",
    "DATEN": "00000000",
    "HANDLE": "051Ml43A7kYGz4DTaO3FFW",
    "TPBEZ": " ",
    "TNDR_EXPD": "00000000",
    "/LOT/SC_CD_SHPNO": " ",
    "TNDR_ERDD": "00000000",
    "UPLBG": "000000",
    "TNDR_LDLG": "0.000",
    "/BEV1/RPANHAE": " ",
    "STREG": "X",
    "DTMEV": "CDM",
    "/LOT/SC_SHIPMNUM": " ",
    "UPTBG": "000000",
    "TNDR_EXPT": "000000",
    "DGTLOCK": " ",
    "SDABW": " ",
    "TNDR_ERDT": "000000",
    "CM_IDENT": " ",
    "STDIS": "X",
    "STLAD": "X",
    "/BEV1/RPFLGNR": "00000",
    "DPABF": "20180420",
    "/LOT/SC_RT_IND": " ",
    "TNDR_LDLU": " ",
    "TNDR_LTDD": "00000000",
    "AULWE": " ",
    "ERNAM": "BATCHJOB",
    "AENAM": "HL002671",
    "EXT_FREIGHT_ORD": " ",
    "VBTYP": "8",
    "/BEV1/RPFAR1": " ",
    "/BEV1/RPFAR2": " ",
    "TNDR_LTDT": "000000",
    "ALLOWED_TWGT": "0",
    "GESZTD": "0",
    "TSEGFL": " ",
    "ADD02": " ",
    "ADD01": " ",
    "MEIZT": " ",
    "STERM_DONE": "X",
    "ADD04": " ",
    "ADD03": " ",
    "KZHULFR": " ",
    "DTMEG": "KG",
    "sourceName": "ECC",
    "STABF": " ",
    "_rid": "KT0XAIZjKMJPXgAAAAAAAA==",
    "_self": "dbs/KT0XAA==/colls/KT0XAIZjKMI=/docs/KT0XAIZjKMJPXgAAAAAAAA==/",
    "_etag": "\"1900d7c6-0000-0100-0000-5ce8616e0000\"",
    "_attachments": "attachments/",
    "_ts": 1558733166, 
	"test_ts": "Date is " + timeStamp  };
//let message = JSON.parse(data);
broker.sendTransaction(data);
