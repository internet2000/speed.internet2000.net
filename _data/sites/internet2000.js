module.exports = {
	description: "Internet 2000 websites", // optional, falls back to object key
	description2: "Static web sites designed by [Internet 2000](https://internet2000.net), powered by [Silex](https://www.silex.me) and [11ty](https://11ty.dev)",
	options: {
		frequency: 60 * 23, // 24 hours
		freshChrome: "run",
    runs: 1,
	},
	urls: [
    "https://internet2000.net",
    "https://cmettavant.fr",
    "https://lescousettesdezoe.fr",
    "https://silex.me",
    "https://blog.refty.co",
    "https://belighted.com",
    "https://tournova.fr",
    "https://internet2000.net/molydesign/",
    "https://ocr.internet2000.net/",
	]
};
