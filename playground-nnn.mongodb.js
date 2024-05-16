const database = 'langsite';
const collectionName = 'flashcards';

use(database);

const collection = db.getCollection(collectionName);

const flashcards = [
	{
		"suuid": "KNXyiN",
		"language": "nl",
		"front": "it looks like it",
		"back": "het liikt erop",
		"rank": "4.6"
	},
	{
		"suuid": "IrTwqr",
		"language": "nl",
		"front": "PR. sneeuw",
		"back": "SNAY-oo",
		"rank": "3.5"
	},
	{
		"suuid": "jXsN6u",
		"language": "nl",
		"front": "a lot of work",
		"back": "een heleboel werk",
		"rank": "4.1"
	},
	{
		"suuid": "4r7Mhp",
		"language": "nl",
		"front": "I especially like jogging",
		"back": "ik hou vooral van joggen",
		"rank": "3.9"
	}
];

collection.insertMany(flashcards);
collection.find();
