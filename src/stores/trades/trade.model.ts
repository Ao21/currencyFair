import * as validator from 'validator';
import * as moment from 'moment';
import { NumberWrapper } from '../../core/utils/facade';
export enum CountryCode {
	AD = 'AD',
	AE = 'AE',
	AF = 'AF',
	AG = 'AG',
	AI = 'AI',
	AL = 'AL',
	AM = 'AM',
	AN = 'AN',
	AO = 'AO',
	AQ = 'AQ',
	AR = 'AR',
	AS = 'AS',
	AT = 'AT',
	AU = 'AU',
	AW = 'AW',
	AX = 'AX',
	AZ = 'AZ',
	BA = 'BA',
	BB = 'BB',
	BD = 'BD',
	BE = 'BE',
	BF = 'BF',
	BG = 'BG',
	BH = 'BH',
	BI = 'BI',
	BJ = 'BJ',
	BL = 'BL',
	BM = 'BM',
	BN = 'BN',
	BO = 'BO',
	BQ = 'BQ',
	BR = 'BR',
	BS = 'BS',
	BT = 'BT',
	BV = 'BV',
	BW = 'BW',
	BY = 'BY',
	BZ = 'BZ',
	CA = 'CA',
	CC = 'CC',
	CD = 'CD',
	CF = 'CF',
	CG = 'CG',
	CH = 'CH',
	CI = 'CI',
	CK = 'CK',
	CL = 'CL',
	CM = 'CM',
	CN = 'CN',
	CO = 'CO',
	CR = 'CR',
	CU = 'CU',
	CV = 'CV',
	CW = 'CW',
	CX = 'CX',
	CY = 'CY',
	CZ = 'CZ',
	DE = 'DE',
	DJ = 'DJ',
	DK = 'DK',
	DM = 'DM',
	DO = 'DO',
	DZ = 'DZ',
	EC = 'EC',
	EE = 'EE',
	EG = 'EG',
	EH = 'EH',
	ER = 'ER',
	ES = 'ES',
	ET = 'ET',
	FI = 'FI',
	FJ = 'FJ',
	FK = 'FK',
	FM = 'FM',
	FO = 'FO',
	FR = 'FR',
	GA = 'GA',
	GB = 'GB',
	GD = 'GD',
	GE = 'GE',
	GF = 'GF',
	GG = 'GG',
	GH = 'GH',
	GI = 'GI',
	GL = 'GL',
	GM = 'GM',
	GN = 'GN',
	GP = 'GP',
	GQ = 'GQ',
	GR = 'GR',
	GS = 'GS',
	GT = 'GT',
	GU = 'GU',
	GW = 'GW',
	GY = 'GY',
	HK = 'HK',
	HM = 'HM',
	HN = 'HN',
	HR = 'HR',
	HT = 'HT',
	HU = 'HU',
	ID = 'ID',
	IE = 'IE',
	IL = 'IL',
	IM = 'IM',
	IN = 'IN',
	IO = 'IO',
	IQ = 'IQ',
	IR = 'IR',
	IS = 'IS',
	IT = 'IT',
	JE = 'JE',
	JM = 'JM',
	JO = 'JO',
	JP = 'JP',
	KE = 'KE',
	KG = 'KG',
	KH = 'KH',
	KI = 'KI',
	KM = 'KM',
	KN = 'KN',
	KP = 'KP',
	KR = 'KR',
	KW = 'KW',
	KY = 'KY',
	KZ = 'KZ',
	LA = 'LA',
	LB = 'LB',
	LC = 'LC',
	LI = 'LI',
	LK = 'LK',
	LR = 'LR',
	LS = 'LS',
	LT = 'LT',
	LU = 'LU',
	LV = 'LV',
	LY = 'LY',
	MA = 'MA',
	MC = 'MC',
	MD = 'MD',
	ME = 'ME',
	MF = 'MF',
	MG = 'MG',
	MH = 'MH',
	MK = 'MK',
	ML = 'ML',
	MM = 'MM',
	MN = 'MN',
	MO = 'MO',
	MP = 'MP',
	MQ = 'MQ',
	MR = 'MR',
	MS = 'MS',
	MT = 'MT',
	MU = 'MU',
	MV = 'MV',
	MW = 'MW',
	MX = 'MX',
	MY = 'MY',
	MZ = 'MZ',
	NA = 'NA',
	NC = 'NC',
	NE = 'NE',
	NF = 'NF',
	NG = 'NG',
	NI = 'NI',
	NL = 'NL',
	NO = 'NO',
	NP = 'NP',
	NR = 'NR',
	NU = 'NU',
	NZ = 'NZ',
	OM = 'OM',
	PA = 'PA',
	PE = 'PE',
	PF = 'PF',
	PG = 'PG',
	PH = 'PH',
	PK = 'PK',
	PL = 'PL',
	PM = 'PM',
	PN = 'PN',
	PR = 'PR',
	PS = 'PS',
	PT = 'PT',
	PW = 'PW',
	PY = 'PY',
	QA = 'QA',
	RE = 'RE',
	RO = 'RO',
	RS = 'RS',
	RU = 'RU',
	RW = 'RW',
	SA = 'SA',
	SB = 'SB',
	SC = 'SC',
	SD = 'SD',
	SE = 'SE',
	SG = 'SG',
	SH = 'SH',
	SI = 'SI',
	SJ = 'SJ',
	SK = 'SK',
	SL = 'SL',
	SM = 'SM',
	SN = 'SN',
	SO = 'SO',
	SR = 'SR',
	SS = 'SS',
	ST = 'ST',
	SV = 'SV',
	SX = 'SX',
	SY = 'SY',
	SZ = 'SZ',
	TC = 'TC',
	TD = 'TD',
	TF = 'TF',
	TG = 'TG',
	TH = 'TH',
	TJ = 'TJ',
	TK = 'TK',
	TL = 'TL',
	TM = 'TM',
	TN = 'TN',
	TO = 'TO',
	TR = 'TR',
	TT = 'TT',
	TV = 'TV',
	TW = 'TW',
	TZ = 'TZ',
	UA = 'UA',
	UG = 'UG',
	UM = 'UM',
	US = 'US',
	UY = 'UY',
	UZ = 'UZ',

	VA = 'VA',

	VC = 'VC',

	VE = 'VE',

	VG = 'VG',

	VI = 'VI',

	VN = 'VN',

	VU = 'VU',

	WF = 'WF',

	WS = 'WS',

	YE = 'YE',

	YT = 'YT',
	ZA = 'ZA',
	ZM = 'ZM',
	ZW = 'ZW'
}
export enum Currency {
	EUR= 'EUR',
	AUD = 'AUD',
	GBP = 'GBP',
	USD = 'USD'
}
export interface Trade {
	userId: number;
	currencyFrom: Currency;
	currencyTo: Currency;
	sell: number;
	buy: number;
	rate: number;
	created:  moment.Moment;
	originatingCountry: CountryCode;
}

export class Trade {
	userId: number;
	currencyFrom: Currency;
	currencyTo: Currency;
	sell: number;
	buy: number;
	rate: number;
	created: moment.Moment;
	originatingCountry: CountryCode;
	constructor(trade: {
		userId: number;
		currencyFrom: string;
		currencyTo: string;
		sell: number;
		buy: number;
		rate: number;
		created: string;
		originatingCountry: string;
	}) {
		this.userId = this.checkId(trade.userId);
		this.currencyFrom = this.checkCurrency(trade.currencyFrom);
		this.currencyTo = this.checkCurrency(trade.currencyTo);
		this.sell = this.checkMinSell(this.checkNumber(trade.sell));
		this.buy = this.checkNumber(trade.buy);
		this.rate = this.checkNumber(trade.rate);
		this.created = this.checkDate(trade.created as string); 
		this.originatingCountry = this.checkISO31661(trade.originatingCountry);
	}

	private checkId(userId: number) {
		if (NumberWrapper.isNumeric(userId)) {
			return userId;
		} else {
			throw new Error('Not a valid id');
		}
	}

	private checkCurrency(currencyStr: string) {
		if (Currency[currencyStr]) {
			return Currency[currencyStr];	
		} else {
			throw new Error('This is not a supported currency');
		}
	}

	private checkISO31661(countryStr: string) {
		if (CountryCode[countryStr]) {
			return CountryCode[countryStr];	
		} else {
			throw new Error('This is not a supported country code');
		}
	}

	private checkMinSell(sell: number) {
		if (sell >= 14.99) {
			return sell;
		} else {
			throw new Error('This amount is too low');
		}
	}

	private checkMinBuy(buy: number) {
		if (buy >= 2) {
			return buy;
		} else {
			throw new Error('This amount is too low');
		}
	}

	private checkNumber(num: number) {
		if (NumberWrapper.isNumeric(num)) {
			return num;
		} else {
			throw new Error('Not a valid number');
		}
	}

	private checkDate(date: string): moment.Moment {
		// 24-JAN-15 10:27:44
		const parsedDate = moment(date, 'DD-MMM-YY hh:mm:ss');
		if (parsedDate.isValid()) {
			return parsedDate;
		} else {
			throw new Error('Not a valid date');
		}
	}
}