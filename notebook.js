
const state = {
	s1: {st:`Vui vẻ`,color:`#FFB3AB`,emoji:`(✧▽✧)`},
	s2: {st:`Khoẻ khoắn`,color:`#FFCBC1`,emoji:`(๑•̀ㅂ•́)و ✧`},
	s3: {st:`OK`,color:`#FFD6C5`,emoji:`(•‿•)`},
	s4: {st:`Hơi mệt`,color:`#FFE3D1`,emoji:`(－_－)`},
	s5: {st:`Bay bay`,color:`#DEE2E6`,emoji:`(￣▽￣;)`},
	s6: {st:`Uể oải`,color:`#A9BCD0`,emoji:`(︶︹︺)`},
	s7: {st:`Não lag`,color:`#6C7B8B`,emoji:`(☉_☉)`},
	s8: {st:`Overload`,color:`#343A40`,emoji:`(×﹏×)`},
};
const mood = {
	m1: {st:`Hạnh phúc`,color:`#FFFF00`,emoji:`(≧◡≦)`},
	m2: {st:`Tự hào`,color:`#FFEA00`,emoji:`(￣▽￣)ゞ`},
	m3: {st:`Tự tin`,color:`#FFD28C`,emoji:`( •̀ ᴗ •́ )✧`},
	m4: {st:`Ngại ngùng`,color:`#FFCAD4`,emoji:`(⁄ ⁄•⁄ω⁄•⁄ ⁄)`},
	m5: {st:`Lo lắng`,color:`#FFB5B8`,emoji:`(°ロ°)!`},
	m6: {st:`Tức giận`,color:`#FF6B6B`,emoji:`(╬ Ò﹏Ó)`},
	m7: {st:`Bình yên`,color:`#C3F0FF`,emoji:`(´▽｀)`},
	m8: {st:`Hy vọng`,color:`#A3E4DB`,emoji:`(✧▽✧)`},
	m9: {st:`Biết ơn`,color:`#B8E0D2`,emoji:`(´∩｡• ᵕ •｡∩\`)`},
	m10: {st:`Chán nản`,color:`#C0C0C0`,emoji:`(¬_¬)`},
	m11: {st:`Ghen tị`,color:`#B39CD0`,emoji:`(눈_눈)`},
	m12: {st:`Lạc lõng`,color:`#A29FC9`,emoji:`(・・;)`},
	m13: {st:`Buồn`,color:`#9DA3C4`,emoji:`(｡•́︿•̀｡)`},
	m14: {st:`Thất vọng`,color:`#8E9AAF`,emoji:`(´；ω；\`)`},

};
const health = {
	h1: {st:`Cực sung`,color:`#FFB3AB`,emoji:`(≧◡≦) ✨`},
	h2: {st:`Êm ru`,color:`#FFD6C5`,emoji:`(๑˘︶˘๑) ♡`},
	h3: {st:`Hơi oải`,color:`#BDE0FE`,emoji:` (๑•́︿•̀๑)`},
	h4: {st:`Đuối rồi`,color:`#A9BCD0`,emoji:`(｡•́︿•̀｡)`},
	h5: {st:`Hết pin`,color:`#6C7B8B`,emoji:`(｡×﹏×｡)`},	
};
const weather={
	w1: {st:`Nắng gắt`,color:`#FF9F1C`,emoji:`(；´∀｀) ・・・`},
	w2: {st:`Nắng đẹp`,color:`#FFD166`,emoji:`(≧◡≦) ｡ﾟ･ ☼`},
	w3: {st:`Mát mẻ`,color:`#BDE0FE`,emoji:`(๑˘︶˘๑) ･ﾟ✧`},
	w4: {st:`Nhiều mây`,color:`#DEE2E6`,emoji:`(－_－) ・・・☁`},
	w5: {st:`Mưa nhẹ`,color:`#A9BCD0`,emoji:`( ´｡• ᵕ •｡\` ) ︙︙`},
	w6: {st:`Mưa dầm`,color:`#6C7B8B`,emoji:`(´-﹏-\`) ︙︙︙`},
	w7: {st:`Bão lớn`,color:`#343A40`,emoji:`(｡×﹏×｡) 〰〰`},
};
const temperature = {
	t1: {st:`Lạnh teo`,color:`#A9BCD0`,emoji:`(｡•́︿•̀｡)`},
	t2: {st:`Mát mẻ`,color:`#FFE3D1`,emoji:`(๑˘︶˘๑)`},
	t3: {st:`Nóng chết`,color:`#FF6B6B`,emoji:`(╬ Ò﹏Ó)`},
};
const minimal = {
	d1: {st:`Dâu về`,color:`#E63946`,emoji:`(；￣Д￣)〰`},
	d2: {st:`Dâu gì cơ`,color:`#FFEFF2`,emoji:`( ´ ▽ \` )`},
};	
const spend={
	sp1: {st:`Zê dô`,color:`#FFF8E0`,emoji:`(✧▽✧)`},
	sp2: {st:`Chăm ka`,color:`#C3F0FF`,emoji:`( ´｡• ᵕ •｡\` )`},
	sp3: {st:`Ba chăm`,color:`#A3E4DB`,emoji:`(￣▽￣;)`},
	sp4: {st:`Năm chăm`,color:`#F4A261 `,emoji:`(｡×﹏×｡)`},
	sp5: {st:`Toang`,color:`#E63946 `,emoji:`(╥﹏╥)`},	
}

const diary = [
	{ date: `2026-03-11`, state: `s1`, mood: `m5`, health:`h3`, weather:`w1`, temperature:`t2`, minimal:`d1`,spend:`sp1`},
	{ date: `2026-03-12`, state: `s2`, mood: `m3`, health:`h1`, weather:`w2`, temperature:`t2`,minimal:`d1`,spend:`sp4`},
	{ date: `2026-03-13`, state: `s3`, mood: `m4`, health:`h4`, weather:`w3`, temperature:`t2`,minimal:`d1`,spend:`sp1`},
	{ date: `2026-03-14`, state: `s4`, mood: `m1`, health:`h5`, weather:`w4`, temperature:`t3`,minimal:`d2`,spend:`sp5`},
	{ date: `2026-03-15`, state: `s5`, mood: `m2`, health:`h2`, weather:`w5`, temperature:`t1`,minimal:`d2`,spend:`sp2`},
	{ date: "2026-03-18", state: "s1", mood: "m2", health: "h1", weather: "w1", temperature: "t2", minimal: "d1", spend: "sp3" },
];

