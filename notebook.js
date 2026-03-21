const datasets = {
	state : {
		meta: { label:"Hôm nay mình ", multi:false,type:"btn",pg:"year"},
		s1: {st:`Vui vẻ`,color:`#FFB3AB`,emoji:`(✧▽✧)`},
		s2: {st:`Khoẻ khoắn`,color:`#FFCBC1`,emoji:`(๑•̀ㅂ•́)و ✧`},
		s3: {st:`OK`,color:`#FFD6C5`,emoji:`(•‿•)`},
		s4: {st:`Hơi mệt`,color:`#FFE3D1`,emoji:`(－_－)`},
		s5: {st:`Bay bay`,color:`#DEE2E6`,emoji:`(￣▽￣;)`},
		s6: {st:`Uể oải`,color:`#A9BCD0`,emoji:`(︶︹︺)`},
		s7: {st:`Não lag`,color:`#6C7B8B`,emoji:`(☉_☉)`},
		s8: {st:`Overload`,color:`#343A40`,emoji:`(×﹏×)`},
	},
	mood : {
		meta: { label:"Hôm nay mình cảm thấy", multi:true,type:"btn",pg:"month"},
		m1: {st:`Hạnh phúc`,color:`#FFFF00`,emoji:`(≧◡≦)`},
		m2: {st:`Tự hào`,color:`#FFEA00`,emoji:`(￣▽￣)ゞ`},
		m3: {st:`Tự tin`,color:`#FFD28C`,emoji:`( •̀ ᴗ •́ )✧`},
		m4: {st:`Ngại ngùng`,color:`#FFCAD4`,emoji:`(⁄ ⁄•⁄ω⁄•⁄ ⁄)`},
		m5: {st:`Lo lắng`,color:`#FFB5B8`,emoji:`(°ロ°)!`},
		m6: {st:`Tức giận`,color:`#FF6B6B`,emoji:`(╬ Ò﹏Ó)`},
		m7: {st:`Bình yên`,color:`#C3F0FF`,emoji:`(´▽｀)`},
		m8: {st:`Hy vọng`,color:`#A3E4DB`,emoji:`(✧▽✧)`},
		m9: {st:`Biết ơn`,color:`#B8E0D2`,emoji:`(´∩｡• ᵕ •｡∩\`)`},
		m10: {st:`Đơ`,color:`#DEE2E6`,emoji:`(ー_ー )`},
		m11: {st:`Chán nản`,color:`#C0C0C0`,emoji:`(¬_¬)`},
		m12: {st:`Ghen tị`,color:`#B39CD0`,emoji:`(눈_눈)`},
		m13: {st:`Lạc lõng`,color:`#A29FC9`,emoji:`(・・;)`},
		m14: {st:`Buồn`,color:`#9DA3C4`,emoji:`(｡•́︿•̀｡)`},
		m15: {st:`Thất vọng`,color:`#8E9AAF`,emoji:`(´；ω；\`)`},
	},
	health : {
		meta: { label:"Sức khỏe hôm nay", multi:false,type:"btn",pg:"year"},
		h1: {st:`Cực sung`,color:`#FFB3AB`,emoji:`(≧◡≦) ✨`},
		h2: {st:`Êm ru`,color:`#FFD6C5`,emoji:`(๑˘︶˘๑) ♡`},
		h3: {st:`Hơi oải`,color:`#BDE0FE`,emoji:` (๑•́︿•̀๑)`},
		h4: {st:`Đuối rồi`,color:`#A9BCD0`,emoji:`(｡•́︿•̀｡)`},
		h5: {st:`Hết pin`,color:`#6C7B8B`,emoji:`(｡×﹏×｡)`},	
	},
	weather : {
		meta: { label:"Thời tiết", multi:false,type:"btn",pg:"year"},
		w1: {st:`Nắng gắt`,color:`#FF9F1C`,emoji:`(；´∀｀) ・・・`},
		w2: {st:`Nắng đẹp`,color:`#FFD166`,emoji:`(≧◡≦) ｡ﾟ･ ☼`},
		w3: {st:`Mát mẻ`,color:`#BDE0FE`,emoji:`(๑˘︶˘๑) ･ﾟ✧`},
		w4: {st:`Nhiều mây`,color:`#DEE2E6`,emoji:`(－_－) ・・・☁`},
		w5: {st:`Mưa nhẹ`,color:`#A9BCD0`,emoji:`( ´｡• ᵕ •｡\` ) ︙︙`},
		w6: {st:`Mưa dầm`,color:`#6C7B8B`,emoji:`(´-﹏-\`) ︙︙︙`},
		w7: {st:`Bão lớn`,color:`#343A40`,emoji:`(｡×﹏×｡) 〰〰`},
	},
	temperature : {
		meta: { label:"Nhiệt độ", multi:false,type:"btn",pg:"year"},
		t1: {st:`Lạnh teo`,color:`#A9BCD0`,emoji:`(｡•́︿•̀｡)`},
		t2: {st:`Mát mẻ`,color:`#FFE3D1`,emoji:`(๑˘︶˘๑)`},
		t3: {st:`Nóng chết`,color:`#FF6B6B`,emoji:`(╬ Ò﹏Ó)`},
	},
	minimal : {
		meta: { label:"Hôm nay ", multi:false,type:"btn",pg:"year"},
		d1: {st:`Dâu về`,color:`#E63946`,emoji:`(；￣Д￣)〰`},
		d2: {st:`Dâu gì cơ`,color:`#FFEFF2`,emoji:`( ´ ▽ \` )`},
	},
	act : {
		meta: { label:"Hôm nay đã thư giãn bằng", multi:true,type:"btn",pg:"month"},
			a1: {st:`Đan móc`, color:`#F9F871`, emoji:`(≧◡≦)っ~~`},
			a2: {st:`Coding`, color:`#FFCAD4`, emoji:`(￣▽￣)ゞ⌨`},
			a3: {st:`Viết`, color:`#FFC6A8`, emoji:`( •̀ ᴗ •́ )✧`},
			a4: {st:`Đọc`, color:`#C3F0FF`, emoji:`(¬‿¬)っ¤`},
			a5: {st:`Thu âm`, color:`#CDB4DB`, emoji:`(o^ ^o)っ[]`},
	},
	spend: {
		meta: { label:"Hôm nay đã tiêu", type:"number", multi:false,pg:"year"},
		sp1: { st:"Zê dô", color:"#FFF8E0", emoji:"(✧▽✧)", range:[0,0] },
		sp2: { st:"Chăm ka", color:"#C3F0FF", emoji:"( ´｡• ᵕ •｡` )", range:[0,101000,300000] },
		sp3: { st:"Ba chăm", color:"#A3E4DB", emoji:"(￣▽￣;)", range:[101000,300000] },
		sp4: { st:"Năm chăm", color:"#F4A261", emoji:"(｡×﹏×｡)", range:[301000,500000] },
		sp5: { st:"Toang", color:"#E63946", emoji:"(╥﹏╥)", range:[501000,Infinity] }
	},
	song: {
		meta: { label:"Bài hát hôm nay", type:"text",pg:"day"}
	},
	quotes: {
		meta: { label:"Quote hôm nay", type:"text",pg:"day"}
	}
};
const diary = [
	{ date:"2026-03-04", state:"s8", mood:["m1","m4","m7"], health:"h3", weather:"w4", temperature:"t1", minimal:"d2", act:["a1","a2"], spend:"sp1", spendAmount:0, song:"Còn thương rau đắng mọc sau hè - Đan Trường", quotes:"Người nắm tay ta, neo ta nửa đời phiêu bạt, ta hôn mắt người, che người nửa kiếp phân vân" },
	{ date:"2026-03-19", state:"s3", mood:["m1","m7"], health:"h3", weather:"w1", temperature:"t2", minimal:"d1", act:["a1","a2","a3","a4","a5"], spend:"sp1", spendAmount:0, song:"Nhan sắc - Minh Hằng", quotes:"For in the dew of little things the heart finds its morning and is refreshed. - Khalil Gibran`" },
	{ date:"2026-03-18", state:"s5", mood:["m4","m7"], health:"h1", weather:"w3", temperature:"t1", minimal:"d2", act:["a1","a2","a3","a4","a5"], spend:"sp1", spendAmount:0, song:"Tôi thấy hoa vàng trên cỏ xanh - Ái Phương", quotes:"And suddenly you know: It's time to start something new and trust the magic of beginnings.And suddenly you know: It's time to start something new and trust the magic of beginnings. - Meister Eckhart`" },
	{ date:"2026-03-17", state:"s6", mood:["m2","m4","m7"], health:"h5", weather:"w3", temperature:"t2", minimal:"d2", act:["a2","a3"], spend:"sp3", spendAmount:500, song:"Phong nữ + Cô Đôi thượng ngàn - Kiều Anh", quotes:"Every ending is a beginning we do not yet recognize. - T.S. Eliot" },
	{ date:"2026-03-16", state:"s2", mood:["m1","m4"], health:"h3", weather:"w1", temperature:"t2", minimal:"d1", act:["a1"], spend:"sp1", spendAmount:0, song:"như chưa từng có cuộc chia ly - Ai đó", quotes:"Love is an act of endless forgiveness, a tender look which becomes a habit. - Peter Ustinov`" },
	{ date:"2026-03-15", state:"s8", mood:["m1","m4","m7"], health:"h3", weather:"w4", temperature:"t1", minimal:"d2", act:["a1","a2"], spend:"sp1", spendAmount:0, song:"Còn thương rau đắng mọc sau hè - Đan Trường", quotes:"Người nắm tay ta, neo ta nửa đời phiêu bạt, ta hôn mắt người, che người nửa kiếp phân vân" },
	{ date:"2026-03-20", state:"s3", mood:["m10","m13"], health:"h3", weather:"w3", temperature:"t3", minimal:"d2", act:["a2"], spend:"sp3", spendAmount:274057, song:"Phong nữ + Cô Đôi thượng ngàn - Kiều Anh", quotes:"Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has - Margaret Mead" },
];

