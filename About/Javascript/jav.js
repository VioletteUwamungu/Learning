var vioshop = {
	products: ["books", "Notebooks", "pens"],
	books: {
		mathbook: {
			page: 300,
			color: "white",
			publication: "10th" 
		},
		Physbook: {
			age: 240,
			color: "blue",
			publication: "20th" 
		}

	},
	Notebooks: {
		bigbooks: {
			time: 20,
			End: 2019,
			review: "monthly"
		},
		smallbooks: {
			time: 13,
			End: 2020,
			review: "daily"
		}
	},
	pens: {
		long: 18,
		short: 21,
		expired: "InWeek"
	}
}
console.log(vioshop.products[1])