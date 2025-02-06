let siteDetailsApi = {
	companyName: "FOODIE RUSH",
	websiteName: "foodierush",
	websiteUrl: '',
	companyAddress: '',
	customerSupport: {
		emailArray: [
			{
				id: "1234567890",
				email: "admin@foodierush.com",
				emailUrl: "mailto:admin@foodierush.com",
			},
		],
		whatsappArray: [
			{
				id: "1234567890",
				whatsapp: "07074491932",
				whatsappUrl: "https://web.whatsapp.com",
			},
			{
				id: "1234567891",
				whatsapp: "08143243423",
				whatsappUrl: "https://web.whatsapp.com",
			},
		],
		telegramArray: [
			{
				id: "1234567890",
				telegram: "username1",
				telegramUrl: "https://t.me/username1",
			},
			{
				id: "1234567891",
				telegram: "username2",
				telegramUrl: "https://t.me/username2",
			},
		],
		instagramArray: [
			{
				id: "1234567890",
				instagram: "username",
				instagramUrl: "https://instagram.com/_u/username/",
			}
		],
		tiktokArray: [
			{
				id: "1234567890",
				tiktok: "username",
				tiktokUrl: "https://www.tiktok.com/@username",
			}
		],
	},
	// otpCode:[
	// 	{
	// 		email:"test@gmail.com",
	// 		code:"9203",
	// 	},
	// 	{
	// 		email:"test@gmail.com",
	// 		code:"9203",
	// 	},
	// ],
	utcDate:"2024-01-27 16:28:00",
	dishCategory: [
		{
			categoryId: "01234567890",
			categoryName: "trending",
			categoryTitle: "Trending",
		},
		{
			categoryId: "01234567890",
			categoryName: "nigerian",
			categoryTitle: "Nigerian",
		},
		{
			categoryId: "01234567891",
			categoryName: "main-dish",
			categoryTitle: "Main Dish",
		},
		{
			categoryId: "01234567891",
			categoryName: "addon",
			categoryTitle: "Addon",
		},
		{
			categoryId: "01234567891",
			categoryName: "side-dish",
			categoryTitle: "Side Dish",
		},
		{
			categoryId: "01234567891",
			categoryName: "chefs-special",
			categoryTitle: "Chef`s Special",
		},
		{
			categoryId: "01234567891",
			categoryName: "customer-favorites",
			categoryTitle: "Customer Favorites",
		},
		{
			categoryId: "01234567891",
			categoryName: "breakfast",
			categoryTitle: "Breakfast",
		},
		{
			categoryId: "01234567891",
			categoryName: "soup",
			categoryTitle: "Soup",
		},
		{
			categoryId: "01234567891",
			categoryName: "stew",
			categoryTitle: "Stew",
		},
	],
	allDishApi: [
		{
			"dishId": "1234567890",
			"dishName": "Fried Rice",
			"dishInfo": "a Portion of rice",
			"imageUrl": "images/dish/fried-rice-only.jpeg",
			"category": "main-dish,nigerian,trending",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Small",
					"price": 1500
				},
				{
					"variantId": "v002",
					"variantName": "Large",
					"price": 2000
				}
			],
			"customizationOptions": [],
			"availableAddons": [
				"1234567892",
				"2345678910",
				"2345678911",
				"2345678912",
				"0000000006",
				"0000000007",
			],
		},
		{
			"dishId": "1234567891",
			"dishName": "Jollof Rice",
			"dishInfo": "a Portion of rice",
			"imageUrl": "images/dish/jollof-rice-only.jpeg",
			"category": "main-dish,nigerian,trending",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Small",
					"price": 1500
				},
				{
					"variantId": "v002",
					"variantName": "Large",
					"price": 2000
				}
			],
			"customizationOptions": [],
			"availableAddons": [
				"1234567892",
				"2345678910",
				"2345678911",
				"2345678912",
				"0000000006",
				"0000000007",
			],
		},
		{
			"dishId": "1234567892",
			"dishName": "Beef Stew",
			"dishInfo": "A Bowl of stew",
			"imageUrl": "images/dish/1234567892.png",
			"category": "main-dish,nigerian,trending,stew",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 1000
				},
			],
			"customizationOptions": [],
			"availableAddons": [
				"1234567890",
				"1234567891",
				"2345678910",
				"2345678911",
				"0000000006",
				"0000000007",
			],
		},
		{
			"dishId": "2345678910",
			"dishName": "Chicken",
			"dishInfo": "Chicken",
			"imageUrl": "images/dish/fried-chicken-lap.jpeg",
			"category": "main-dish,trending",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Small",
					"price": 1500
				},
				{
					"variantId": "v002",
					"variantName": "Large",
					"price": 2000
				}
			],
			"customizationOptions": [
				{
					"optionId": "o001",
					"optionName": "Grilled",
					"additionalPrice": 500
				},
				{
					"optionId": "o002",
					"optionName": "Fried",
					"additionalPrice": 0
				}
			],
			"availableAddons": [],
		},
		{
			"dishId": "2345678911",
			"dishName": "Plantain",
			"dishInfo": "1 Portion of plantain",
			"imageUrl": "images/dish/1234567894.png",
			"category": "main-dish,trending",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 500
				},
			],
			"customizationOptions": [
				{
					"optionId": "o001",
					"optionName": "Fried",
					"additionalPrice": 0
				},
			],
			"availableAddons": [],
		},
		{
			"dishId": "2345678912",
			"dishName": "Salad",
			"dishInfo": "A Portion of Salad",
			"imageUrl": "images/dish/1234567895.png",
			"category": "main-dish,trending",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 500
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "0000000001",
			"dishName": "Fufu / Akpu Wrap",
			"dishInfo": "A wrap of fufu/akpu",
			"imageUrl": "images/dish/fufu-akpu-wrap-only.jpg",
			"category": "swallow",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 500
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "0000000002",
			"dishName": "Semovita Wrap",
			"dishInfo": "A wrap of semovita",
			"imageUrl": "images/dish/semovita-wrap-only.jpg",
			"category": "swallow",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 500
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "0000000003",
			"dishName": "Pounded Yam Wrap",
			"dishInfo": "A wrap of Pounded Yam",
			"imageUrl": "images/dish/pounded-yam-wrap-only.jpeg",
			"category": "swallow",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 500
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "0000000004",
			"dishName": "Eba Wrap",
			"dishInfo": "A wrap of Eba",
			"imageUrl": "images/dish/eba-wrap.jpeg",
			"category": "swallow",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 500
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "0000000005",
			"dishName": "Amala Wrap",
			"dishInfo": "A wrap of Amala",
			"imageUrl": "images/dish/amala-wrap.png",
			"category": "swallow",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 500
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "0000000006",
			"dishName": "Fried Fish",
			"dishInfo": "A piece of Fried Fish",
			"imageUrl": "images/dish/fried-fish.jpeg",
			"category": "protein",
			"dishType": "side-dish",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 500
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "0000000007",
			"dishName": "Fried Meat",
			"dishInfo": "A piece of Fried Meat",
			"imageUrl": "images/dish/fried-meat.jpeg",
			"category": "protein",
			"dishType": "side-dish",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 500
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "0000000008",
			"dishName": "Egusi Soup",
			"dishInfo": "A portion of Egusi Soup",
			"imageUrl": "images/dish/egusi-soup.jpg",
			"category": "soup",
			"dishType": "addon",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 500
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "00000000010",
			"dishName": "Okro Soup",
			"dishInfo": "A portion of Okro Soup",
			"imageUrl": "images/dish/okro-soup.jpg",
			"category": "soup",
			"dishType": "addon",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 700
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "0000000011",
			"dishName": "Spaghetti",
			"dishInfo": "A portion of Spaghetti",
			"imageUrl": "images/dish/spaghetti.jpg",
			"category": "main-dish",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 1500
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "00000000012",
			"dishName": "Macaroni",
			"dishInfo": "A portion of Macaroni",
			"imageUrl": "images/dish/macaroni.jpg",
			"category": "main-dish",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 1500
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "00000000013",
			"dishName": "Chicken Bourguignon Bowl",
			"dishInfo": "A Bowl of Chicken Bourguignon",
			"imageUrl": "images/dish/chicken-bourguignon-bowl.jpg",
			"category": "main-dish",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "small",
					"price": 2000
				},
				{
					"variantId": "v002",
					"variantName": "Big",
					"price": 3000
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "00000000014",
			"dishName": "Mexican Burrito Bowl",
			"dishInfo": "A Bowl of Mexican Burrito",
			"imageUrl": "images/dish/mexican-burrito-bowl.jpg",
			"category": "main-dish",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "small",
					"price": 2000
				},
				{
					"variantId": "v002",
					"variantName": "Big",
					"price": 3000
				},
			],
			"customizationOptions": [],
			"availableAddons": [],
		},
		{
			"dishId": "00000000015",
			"dishName": "White Rice",
			"dishInfo": "a Portion of rice",
			"imageUrl": "images/dish/white-rice-only.png",
			"category": "main-dish",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Small",
					"price": 1500
				},
				{
					"variantId": "v002",
					"variantName": "Large",
					"price": 2000
				}
			],
			"customizationOptions": [],
			"availableAddons": [
				"1234567892",
				"2345678910",
				"2345678911",
				"2345678912",
				"0000000006",
				"0000000007",
			],
		},
		{
			"dishId": "00000000016",
			"dishName": "Vegetable Stew",
			"dishInfo": "a bowl of Vegetable Stew",
			"imageUrl": "images/dish/vegetable-stew-only.png",
			"category": "main-dish,nigerian,stew",
			"dishType": "main",
			"stockQuantity": 50,
			"dishStockLastUpdated": "2025-01-25T14:00:00Z",
			"priceVariants": [
				{
					"variantId": "v001",
					"variantName": "Normal",
					"price": 1000
				},
			],
			"customizationOptions": [],
			"availableAddons": [
				"1234567890",
				"1234567891",
				"2345678910",
				"2345678911",
				"0000000006",
				"0000000007",
			],
		},
	],
};



const allCountriesNamesApi = [
	{ country: "Afghanistan", countryCode: "AF", currencyName: "Afghan Afghani", currencySymbol: "&#x60B;", currencyCode: "AFN", languageCode: "ps" },
	{ country: "Albania", countryCode: "AL", currencyName: "Albanian Lek", currencySymbol: "L", currencyCode: "ALL", languageCode: "sq" },
	{ country: "Algeria", countryCode: "DZ", currencyName: "Algerian Dinar", currencySymbol: "&#x62F;&#x62C;", currencyCode: "DZD", languageCode: "ar" },
	{ country: "Andorra", countryCode: "AD", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "ca" },
	{ country: "Angola", countryCode: "AO", currencyName: "Angolan Kwanza", currencySymbol: "Kz", currencyCode: "AOA", languageCode: "pt" },
	{ country: "Antigua and Barbuda", countryCode: "AG", currencyName: "East Caribbean Dollar", currencySymbol: "&#x24;", currencyCode: "XCD", languageCode: "en" },
	{ country: "Argentina", countryCode: "AR", currencyName: "Argentine Peso", currencySymbol: "&#x24;", currencyCode: "ARS", languageCode: "es" },
	{ country: "Armenia", countryCode: "AM", currencyName: "Armenian Dram", currencySymbol: "&#x58F;", currencyCode: "AMD", languageCode: "hy" },
	{ country: "Australia", countryCode: "AU", currencyName: "Australian Dollar", currencySymbol: "&#x24;", currencyCode: "AUD", languageCode: "en" },
	{ country: "Austria", countryCode: "AT", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "de" },
	{ country: "Azerbaijan", countryCode: "AZ", currencyName: "Azerbaijani Manat", currencySymbol: "&#x20BC;", currencyCode: "AZN", languageCode: "az" },
	{ country: "Bahamas", countryCode: "BS", currencyName: "Bahamian Dollar", currencySymbol: "&#x24;", currencyCode: "BSD", languageCode: "en" },
	{ country: "Bahrain", countryCode: "BH", currencyName: "Bahraini Dinar", currencySymbol: "&#x62F;&#x628;", currencyCode: "BHD", languageCode: "ar" },
	{ country: "Bangladesh", countryCode: "BD", currencyName: "Bangladeshi Taka", currencySymbol: "&#x9F3;", currencyCode: "BDT", languageCode: "bn" },
	{ country: "Barbados", countryCode: "BB", currencyName: "Barbadian Dollar", currencySymbol: "&#x24;", currencyCode: "BBD", languageCode: "en" },
	{ country: "Belarus", countryCode: "BY", currencyName: "Belarusian Ruble", currencySymbol: "Br", currencyCode: "BYN", languageCode: "be" },
	{ country: "Belgium", countryCode: "BE", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "nl" },
	{ country: "Belize", countryCode: "BZ", currencyName: "Belize Dollar", currencySymbol: "&#x24;", currencyCode: "BZD", languageCode: "en" },
	{ country: "Benin", countryCode: "BJ", currencyName: "West African CFA Franc", currencySymbol: "&#x43;&#x46;&#x41;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Bhutan", countryCode: "BT", currencyName: "Bhutanese Ngultrum", currencySymbol: "Nu.", currencyCode: "BTN", languageCode: "dz" },
	{ country: "Bolivia", countryCode: "BO", currencyName: "Bolivian Boliviano", currencySymbol: "Bs.", currencyCode: "BOB", languageCode: "es" },
	{ country: "Bosnia and Herzegovina", countryCode: "BA", currencyName: "Bosnia-Herzegovina Convertible Mark", currencySymbol: "KM", currencyCode: "BAM", languageCode: "bs" },
	{ country: "Botswana", countryCode: "BW", currencyName: "Botswana Pula", currencySymbol: "P", currencyCode: "BWP", languageCode: "en" },
	{ country: "Brazil", countryCode: "BR", currencyName: "Brazilian Real", currencySymbol: "R&#x24;", currencyCode: "BRL", languageCode: "pt" },
	{ country: "Brunei", countryCode: "BN", currencyName: "Brunei Dollar", currencySymbol: "&#x24;", currencyCode: "BND", languageCode: "ms" },
	{ country: "Bulgaria", countryCode: "BG", currencyName: "Bulgarian Lev", currencySymbol: "&#x43B;&#x432;", currencyCode: "BGN", languageCode: "bg" },
	{ country: "Burkina Faso", countryCode: "BF", currencyName: "West African CFA Franc", currencySymbol: "&#x43;&#x46;&#x41;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Burundi", countryCode: "BI", currencyName: "Burundian Franc", currencySymbol: "&#x46;&#x42;&#x75;", currencyCode: "BIF", languageCode: "fr" },
	{ country: "Cabo Verde", countryCode: "CV", currencyName: "Cape Verdean Escudo", currencySymbol: "$", currencyCode: "CVE", languageCode: "pt" },
	{ country: "Cambodia", countryCode: "KH", currencyName: "Cambodian Riel", currencySymbol: "&#x17DB;", currencyCode: "KHR", languageCode: "km" },
	{ country: "Cameroon", countryCode: "CM", currencyName: "Central African CFA Franc", currencySymbol: "&#x46;&#x43;&#x46;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Canada", countryCode: "CA", currencyName: "Canadian Dollar", currencySymbol: "&#x24;", currencyCode: "CAD", languageCode: "en" },
	{ country: "Central African Republic", countryCode: "CF", currencyName: "Central African CFA Franc", currencySymbol: "&#x46;&#x43;&#x46;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Chad", countryCode: "TD", currencyName: "Central African CFA Franc", currencySymbol: "&#x46;&#x43;&#x46;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Chile", countryCode: "CL", currencyName: "Chilean Peso", currencySymbol: "&#x24;", currencyCode: "CLP", languageCode: "es" },
	{ country: "China", countryCode: "CN", currencyName: "Chinese Yuan Renminbi", currencySymbol: "&#xA5;", currencyCode: "CNY", languageCode: "zh" },
	{ country: "Colombia", countryCode: "CO", currencyName: "Colombian Peso", currencySymbol: "&#x24;", currencyCode: "COP", languageCode: "es" },
	{ country: "Comoros", countryCode: "KM", currencyName: "Comorian Franc", currencySymbol: "&#x43;&#x46;", currencyCode: "KMF", languageCode: "ar" },
	{ country: "Congo", countryCode: "CG", currencyName: "Central African CFA Franc", currencySymbol: "&#x46;&#x43;&#x46;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Costa Rica", countryCode: "CR", currencyName: "Costa Rican Colón", currencySymbol: "&#x20A1;", currencyCode: "CRC", languageCode: "es" },
	{ country: "Croatia", countryCode: "HR", currencyName: "Croatian Kuna", currencySymbol: "kn", currencyCode: "HRK", languageCode: "hr" },
	{ country: "Cuba", countryCode: "CU", currencyName: "Cuban Peso", currencySymbol: "&#x24;", currencyCode: "CUP", languageCode: "es" },
	{ country: "Cyprus", countryCode: "CY", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "el" },
	{ country: "Czech Republic", countryCode: "CZ", currencyName: "Czech Koruna", currencySymbol: "&#x4B;&#x10D;", currencyCode: "CZK", languageCode: "cs" },
	{ country: "Denmark", countryCode: "DK", currencyName: "Danish Krone", currencySymbol: "&#x6B;&#x72;", currencyCode: "DKK", languageCode: "da" },
	{ country: "Djibouti", countryCode: "DJ", currencyName: "Djiboutian Franc", currencySymbol: "&#x46;&#x64;&#x6A;", currencyCode: "DJF", languageCode: "fr" },
	{ country: "Dominica", countryCode: "DM", currencyName: "East Caribbean Dollar", currencySymbol: "&#x24;", currencyCode: "XCD", languageCode: "en" },
	{ country: "Dominican Republic", countryCode: "DO", currencyName: "Dominican Peso", currencySymbol: "&#x52;&#x44;&#x24;", currencyCode: "DOP", languageCode: "es" },
	{ country: "Ecuador", countryCode: "EC", currencyName: "U.S. Dollar", currencySymbol: "&#x24;", currencyCode: "USD", languageCode: "es" },
	{ country: "Egypt", countryCode: "EG", currencyName: "Egyptian Pound", currencySymbol: "&#xA3;", currencyCode: "EGP", languageCode: "ar" },
	{ country: "El Salvador", countryCode: "SV", currencyName: "U.S. Dollar", currencySymbol: "&#x24;", currencyCode: "USD", languageCode: "es" },
	{ country: "Equatorial Guinea", countryCode: "GQ", currencyName: "Central African CFA Franc", currencySymbol: "&#x46;&#x43;&#x46;", currencyCode: "CFA", languageCode: "es" },
	{ country: "Eritrea", countryCode: "ER", currencyName: "Eritrean Nakfa", currencySymbol: "Nfk", currencyCode: "ERN", languageCode: "ti" },
	{ country: "Estonia", countryCode: "EE", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "et" },
	{ country: "Eswatini", countryCode: "SZ", currencyName: "Eswatini Lilangeni", currencySymbol: "L", currencyCode: "SZL", languageCode: "en" },
	{ country: "Ethiopia", countryCode: "ET", currencyName: "Ethiopian Birr", currencySymbol: "&#x124;&#x20B5;", currencyCode: "ETB", languageCode: "am" },
	{ country: "Fiji", countryCode: "FJ", currencyName: "Fijian Dollar", currencySymbol: "&#x24;", currencyCode: "FJD", languageCode: "en" },
	{ country: "Finland", countryCode: "FI", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "fi" },
	{ country: "France", countryCode: "FR", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "fr" },
	{ country: "Gabon", countryCode: "GA", currencyName: "Central African CFA Franc", currencySymbol: "&#x46;&#x43;&#x46;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Gambia", countryCode: "GM", currencyName: "Gambian Dalasi", currencySymbol: "D", currencyCode: "GMD", languageCode: "en" },
	{ country: "Georgia", countryCode: "GE", currencyName: "Georgian Lari", currencySymbol: "&#x20BE;", currencyCode: "GEL", languageCode: "ka" },
	{ country: "Germany", countryCode: "DE", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "de" },
	{ country: "Ghana", countryCode: "GH", currencyName: "Ghanaian Cedi", currencySymbol: "&#x20B5;", currencyCode: "GHS", languageCode: "en" },
	{ country: "Greece", countryCode: "GR", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "el" },
	{ country: "Grenada", countryCode: "GD", currencyName: "East Caribbean Dollar", currencySymbol: "&#x24;", currencyCode: "XCD", languageCode: "en" },
	{ country: "Guatemala", countryCode: "GT", currencyName: "Guatemalan Quetzal", currencySymbol: "Q", currencyCode: "GTQ", languageCode: "es" },
	{ country: "Guinea", countryCode: "GN", currencyName: "Guinean Franc", currencySymbol: "&#x46;&#x47;&#x6E;", currencyCode: "GNF", languageCode: "fr" },
	{ country: "Guinea-Bissau", countryCode: "GW", currencyName: "West African CFA Franc", currencySymbol: "&#x43;&#x46;&#x41;", currencyCode: "CFA", languageCode: "pt" },
	{ country: "Guyana", countryCode: "GY", currencyName: "Guyanese Dollar", currencySymbol: "&#x24;", currencyCode: "GYD", languageCode: "en" },
	{ country: "Haiti", countryCode: "HT", currencyName: "Haitian Gourde", currencySymbol: "G", currencyCode: "HTG", languageCode: "ht" },
	{ country: "Honduras", countryCode: "HN", currencyName: "Honduran Lempira", currencySymbol: "L", currencyCode: "HNL", languageCode: "es" },
	{ country: "Hungary", countryCode: "HU", currencyName: "Hungarian Forint", currencySymbol: "&#x46;&#x74;", currencyCode: "HUF", languageCode: "hu" },
	{ country: "Iceland", countryCode: "IS", currencyName: "Icelandic Króna", currencySymbol: "&#x6B;&#x72;", currencyCode: "ISK", languageCode: "is" },
	{ country: "India", countryCode: "IN", currencyName: "Indian Rupee", currencySymbol: "&#x20B9;", currencyCode: "INR", languageCode: "hi" },
	{ country: "Indonesia", countryCode: "ID", currencyName: "Indonesian Rupiah", currencySymbol: "Rp", currencyCode: "IDR", languageCode: "id" },
	{ country: "Iran", countryCode: "IR", currencyName: "Iranian Rial", currencySymbol: "&#xFDFC;", currencyCode: "IRR", languageCode: "fa" },
	{ country: "Iraq", countryCode: "IQ", currencyName: "Iraqi Dinar", currencySymbol: "&#x62F;.&#x639;", currencyCode: "IQD", languageCode: "ar" },
	{ country: "Ireland", countryCode: "IE", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "ga" },
	{ country: "Israel", countryCode: "IL", currencyName: "Israeli New Shekel", currencySymbol: "&#x20AA;", currencyCode: "ILS", languageCode: "he" },
	{ country: "Italy", countryCode: "IT", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "it" },
	{ country: "Ivory Coast", countryCode: "CI", currencyName: "West African CFA Franc", currencySymbol: "&#x43;&#x46;&#x41;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Jamaica", countryCode: "JM", currencyName: "Jamaican Dollar", currencySymbol: "&#x24;", currencyCode: "JMD", languageCode: "en" },
	{ country: "Japan", countryCode: "JP", currencyName: "Japanese Yen", currencySymbol: "&#xA5;", currencyCode: "JPY", languageCode: "ja" },
	{ country: "Jordan", countryCode: "JO", currencyName: "Jordanian Dinar", currencySymbol: "&#x62F;.&#x627;", currencyCode: "JOD", languageCode: "ar" },
	{ country: "Kazakhstan", countryCode: "KZ", currencyName: "Kazakhstani Tenge", currencySymbol: "&#x20B8;", currencyCode: "KZT", languageCode: "kk" },
	{ country: "Kenya", countryCode: "KE", currencyName: "Kenyan Shilling", currencySymbol: "KSh", currencyCode: "KES", languageCode: "en" },
	{ country: "Kiribati", countryCode: "KI", currencyName: "Australian Dollar", currencySymbol: "&#x24;", currencyCode: "AUD", languageCode: "en" },
	{ country: "Korea, North", countryCode: "KP", currencyName: "North Korean Won", currencySymbol: "&#x20A9;", currencyCode: "KPW", languageCode: "ko" },
	{ country: "Korea, South", countryCode: "KR", currencyName: "South Korean Won", currencySymbol: "&#x20A9;", currencyCode: "KRW", languageCode: "ko" },
	{ country: "Kosovo", countryCode: "XK", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "sq" },
	{ country: "Kuwait", countryCode: "KW", currencyName: "Kuwaiti Dinar", currencySymbol: "&#x62F;.&#x643;", currencyCode: "KWD", languageCode: "ar" },
	{ country: "Kyrgyzstan", countryCode: "KG", currencyName: "Kyrgyzstani Som", currencySymbol: "&#x441;&#x43E;&#x43C;", currencyCode: "KGS", languageCode: "ky" },
	{ country: "Laos", countryCode: "LA", currencyName: "Lao Kip", currencySymbol: "&#x20AD;", currencyCode: "LAK", languageCode: "lo" },
	{ country: "Latvia", countryCode: "LV", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "lv" },
	{ country: "Lebanon", countryCode: "LB", currencyName: "Lebanese Pound", currencySymbol: "&#xA3;", currencyCode: "LBP", languageCode: "ar" },
	{ country: "Lesotho", countryCode: "LS", currencyName: "Lesotho Loti", currencySymbol: "L", currencyCode: "LSL", languageCode: "en" },
	{ country: "Liberia", countryCode: "LR", currencyName: "Liberian Dollar", currencySymbol: "&#x24;", currencyCode: "LRD", languageCode: "en" },
	{ country: "Libya", countryCode: "LY", currencyName: "Libyan Dinar", currencySymbol: "&#x644;&#x62F;", currencyCode: "LYD", languageCode: "ar" },
	{ country: "Liechtenstein", countryCode: "LI", currencyName: "Swiss Franc", currencySymbol: "&#x20A3;", currencyCode: "CHF", languageCode: "de" },
	{ country: "Lithuania", countryCode: "LT", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "lt" },
	{ country: "Luxembourg", countryCode: "LU", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "lb" },
	{ country: "Madagascar", countryCode: "MG", currencyName: "Malagasy Ariary", currencySymbol: "&#x41D;&#x410;&#x410;", currencyCode: "MGA", languageCode: "mg" },
	{ country: "Malawi", countryCode: "MW", currencyName: "Malawian Kwacha", currencySymbol: "MK", currencyCode: "MWK", languageCode: "en" },
	{ country: "Malaysia", countryCode: "MY", currencyName: "Malaysian Ringgit", currencySymbol: "RM", currencyCode: "MYR", languageCode: "ms" },
	{ country: "Maldives", countryCode: "MV", currencyName: "Maldivian Rufiyaa", currencySymbol: "Rf", currencyCode: "MVR", languageCode: "dv" },
	{ country: "Mali", countryCode: "ML", currencyName: "West African CFA Franc", currencySymbol: "&#x43;&#x46;&#x41;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Malta", countryCode: "MT", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "mt" },
	{ country: "Marshall Islands", countryCode: "MH", currencyName: "United States Dollar", currencySymbol: "&#x24;", currencyCode: "USD", languageCode: "en" },
	{ country: "Mauritania", countryCode: "MR", currencyName: "Mauritanian Ouguiya", currencySymbol: "UM", currencyCode: "MRU", languageCode: "ar" },
	{ country: "Mauritius", countryCode: "MU", currencyName: "Mauritian Rupee", currencySymbol: "&#x20A8;", currencyCode: "MUR", languageCode: "en" },
	{ country: "Mexico", countryCode: "MX", currencyName: "Mexican Peso", currencySymbol: "&#x24;", currencyCode: "MXN", languageCode: "es" },
	{ country: "Micronesia", countryCode: "FM", currencyName: "United States Dollar", currencySymbol: "&#x24;", currencyCode: "USD", languageCode: "en" },
	{ country: "Moldova", countryCode: "MD", currencyName: "Moldovan Leu", currencySymbol: "L", currencyCode: "MDL", languageCode: "ro" },
	{ country: "Monaco", countryCode: "MC", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "fr" },
	{ country: "Mongolia", countryCode: "MN", currencyName: "Mongolian Tögrög", currencySymbol: "&#x20AE;", currencyCode: "MNT", languageCode: "mn" },
	{ country: "Montenegro", countryCode: "ME", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "sr" },
	{ country: "Morocco", countryCode: "MA", currencyName: "Moroccan Dirham", currencySymbol: "&#x62F;&#x645;", currencyCode: "MAD", languageCode: "ar" },
	{ country: "Mozambique", countryCode: "MZ", currencyName: "Mozambican Metical", currencySymbol: "MT", currencyCode: "MZN", languageCode: "pt" },
	{ country: "Myanmar", countryCode: "MM", currencyName: "Myanmar Kyat", currencySymbol: "K", currencyCode: "MMK", languageCode: "my" },
	{ country: "Namibia", countryCode: "NA", currencyName: "Namibian Dollar", currencySymbol: "&#x24;", currencyCode: "NAD", languageCode: "en" },
	{ country: "Nauru", countryCode: "NR", currencyName: "Australian Dollar", currencySymbol: "&#x24;", currencyCode: "AUD", languageCode: "en" },
	{ country: "Nepal", countryCode: "NP", currencyName: "Nepalese Rupee", currencySymbol: "&#x20A8;", currencyCode: "NPR", languageCode: "ne" },
	{ country: "Netherlands", countryCode: "NL", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "nl" },
	{ country: "New Zealand", countryCode: "NZ", currencyName: "New Zealand Dollar", currencySymbol: "&#x24;", currencyCode: "NZD", languageCode: "en" },
	{ country: "Nicaragua", countryCode: "NI", currencyName: "Nicaraguan Córdoba", currencySymbol: "C$", currencyCode: "NIO", languageCode: "es" },
	{ country: "Niger", countryCode: "NE", currencyName: "West African CFA Franc", currencySymbol: "&#x43;&#x46;&#x41;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Nigeria", countryCode: "NG", currencyName: "Nigerian Naira", currencySymbol: "&#x20A6;", currencyCode: "NGN", languageCode: "en" },
	{ country: "North Macedonia", countryCode: "MK", currencyName: "Macedonian Denar", currencySymbol: "&#x434;&#x435;&#x43D;", currencyCode: "MKD", languageCode: "mk" },
	{ country: "Norway", countryCode: "NO", currencyName: "Norwegian Krone", currencySymbol: "kr", currencyCode: "NOK", languageCode: "no" },
	{ country: "Oman", countryCode: "OM", currencyName: "Omani Rial", currencySymbol: "&#x631;&#x646;&#x644;", currencyCode: "OMR", languageCode: "ar" },
	{ country: "Pakistan", countryCode: "PK", currencyName: "Pakistani Rupee", currencySymbol: "&#x20A8;", currencyCode: "PKR", languageCode: "ur" },
	{ country: "Palau", countryCode: "PW", currencyName: "United States Dollar", currencySymbol: "&#x24;", currencyCode: "USD", languageCode: "en" },
	{ country: "Panama", countryCode: "PA", currencyName: "Balboa", currencySymbol: "&#x24;", currencyCode: "PAB", languageCode: "es" },
	{ country: "Papua New Guinea", countryCode: "PG", currencyName: "Kina", currencySymbol: "K", currencyCode: "PGK", languageCode: "en" },
	{ country: "Paraguay", countryCode: "PY", currencyName: "Guarani", currencySymbol: "&#x20B2;", currencyCode: "PYG", languageCode: "es" },
	{ country: "Peru", countryCode: "PE", currencyName: "Sol", currencySymbol: "S/", currencyCode: "PEN", languageCode: "es" },
	{ country: "Philippines", countryCode: "PH", currencyName: "Philippine Peso", currencySymbol: "&#x20B1;", currencyCode: "PHP", languageCode: "tl" },
	{ country: "Poland", countryCode: "PL", currencyName: "Polish Zloty", currencySymbol: "&#x142;", currencyCode: "PLN", languageCode: "pl" },
	{ country: "Portugal", countryCode: "PT", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "pt" },
	{ country: "Qatar", countryCode: "QA", currencyName: "Qatari Rial", currencySymbol: "&#x631;&#x642;&#x643;", currencyCode: "QAR", languageCode: "ar" },
	{ country: "Romania", countryCode: "RO", currencyName: "Romanian Leu", currencySymbol: "lei", currencyCode: "RON", languageCode: "ro" },
	{ country: "Russia", countryCode: "RU", currencyName: "Russian Ruble", currencySymbol: "&#x20BD;", currencyCode: "RUB", languageCode: "ru" },
	{ country: "Rwanda", countryCode: "RW", currencyName: "Rwandan Franc", currencySymbol: "&#x48;&#x46;", currencyCode: "RWF", languageCode: "rw" },
	{ country: "Saint Kitts and Nevis", countryCode: "KN", currencyName: "East Caribbean Dollar", currencySymbol: "&#x24;", currencyCode: "XCD", languageCode: "en" },
	{ country: "Saint Lucia", countryCode: "LC", currencyName: "East Caribbean Dollar", currencySymbol: "&#x24;", currencyCode: "XCD", languageCode: "en" },
	{ country: "Saint Vincent and the Grenadines", countryCode: "VC", currencyName: "East Caribbean Dollar", currencySymbol: "&#x24;", currencyCode: "XCD", languageCode: "en" },
	{ country: "Samoa", countryCode: "WS", currencyName: "Samoan Tala", currencySymbol: "T", currencyCode: "WST", languageCode: "sm" },
	{ country: "San Marino", countryCode: "SM", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "it" },
	{ country: "Sao Tome and Principe", countryCode: "ST", currencyName: "Dobra", currencySymbol: "Db", currencyCode: "STN", languageCode: "pt" },
	{ country: "Saudi Arabia", countryCode: "SA", currencyName: "Saudi Riyal", currencySymbol: "&#x631;&#x644;&#x633;", currencyCode: "SAR", languageCode: "ar" },
	{ country: "Senegal", countryCode: "SN", currencyName: "CFA Franc", currencySymbol: "&#x43;&#x46;&#x41;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Serbia", countryCode: "RS", currencyName: "Serbian Dinar", currencySymbol: "RSD", currencyCode: "RSD", languageCode: "sr" },
	{ country: "Seychelles", countryCode: "SC", currencyName: "Seychellois Rupee", currencySymbol: "SRe", currencyCode: "SCR", languageCode: "crs" },
	{ country: "Sierra Leone", countryCode: "SL", currencyName: "Leone", currencySymbol: "Le", currencyCode: "SLL", languageCode: "en" },
	{ country: "Singapore", countryCode: "SG", currencyName: "Singapore Dollar", currencySymbol: "&#x24;", currencyCode: "SGD", languageCode: "en" },
	{ country: "Slovakia", countryCode: "SK", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "sk" },
	{ country: "Slovenia", countryCode: "SI", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "sl" },
	{ country: "Solomon Islands", countryCode: "SB", currencyName: "Solomon Islands Dollar", currencySymbol: "$", currencyCode: "SBD", languageCode: "en" },
	{ country: "Somalia", countryCode: "SO", currencyName: "Somali Shilling", currencySymbol: "Sh", currencyCode: "SOS", languageCode: "so" },
	{ country: "South Africa", countryCode: "ZA", currencyName: "South African Rand", currencySymbol: "R", currencyCode: "ZAR", languageCode: "en" },
	{ country: "South Korea", countryCode: "KR", currencyName: "South Korean Won", currencySymbol: "&#x20A9;", currencyCode: "KRW", languageCode: "ko" },
	{ country: "South Sudan", countryCode: "SS", currencyName: "South Sudanese Pound", currencySymbol: "SSP", currencyCode: "SSP", languageCode: "en" },
	{ country: "Spain", countryCode: "ES", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "es" },
	{ country: "Sri Lanka", countryCode: "LK", currencyName: "Sri Lankan Rupee", currencySymbol: "Rs", currencyCode: "LKR", languageCode: "si" },
	{ country: "Sudan", countryCode: "SD", currencyName: "Sudanese Pound", currencySymbol: "SDG", currencyCode: "SDG", languageCode: "ar" },
	{ country: "Suriname", countryCode: "SR", currencyName: "Surinamese Dollar", currencySymbol: "$", currencyCode: "SRD", languageCode: "nl" },
	{ country: "Sweden", countryCode: "SE", currencyName: "Swedish Krona", currencySymbol: "kr", currencyCode: "SEK", languageCode: "sv" },
	{ country: "Switzerland", countryCode: "CH", currencyName: "Swiss Franc", currencySymbol: "CHF", currencyCode: "CHF", languageCode: "de" },
	{ country: "Syria", countryCode: "SY", currencyName: "Syrian Pound", currencySymbol: "&#x644;&#x645;&#x631;", currencyCode: "SYP", languageCode: "ar" },
	{ country: "Taiwan", countryCode: "TW", currencyName: "New Taiwan Dollar", currencySymbol: "NT$", currencyCode: "TWD", languageCode: "zh" },
	{ country: "Tajikistan", countryCode: "TJ", currencyName: "Tajikistani Somoni", currencySymbol: "&#x42F;", currencyCode: "TJS", languageCode: "tg" },
	{ country: "Tanzania", countryCode: "TZ", currencyName: "Tanzanian Shilling", currencySymbol: "TSh", currencyCode: "TZS", languageCode: "sw" },
	{ country: "Thailand", countryCode: "TH", currencyName: "Thai Baht", currencySymbol: "&#x0E3F;", currencyCode: "THB", languageCode: "th" },
	{ country: "Timor-Leste", countryCode: "TL", currencyName: "United States Dollar", currencySymbol: "&#x24;", currencyCode: "USD", languageCode: "pt" },
	{ country: "Togo", countryCode: "TG", currencyName: "West African CFA Franc", currencySymbol: "&#x43;&#x46;&#x41;", currencyCode: "CFA", languageCode: "fr" },
	{ country: "Tokelau", countryCode: "TK", currencyName: "New Zealand Dollar", currencySymbol: "&#x24;", currencyCode: "NZD", languageCode: "en" },
	{ country: "Tonga", countryCode: "TO", currencyName: "Tongan Paʻanga", currencySymbol: "TOP", currencyCode: "TOP", languageCode: "to" },
	{ country: "Trinidad and Tobago", countryCode: "TT", currencyName: "Trinidad and Tobago Dollar", currencySymbol: "$", currencyCode: "TTD", languageCode: "en" },
	{ country: "Tunisia", countryCode: "TN", currencyName: "Tunisian Dinar", currencySymbol: "&#x62F;&#x633;", currencyCode: "TND", languageCode: "ar" },
	{ country: "Turkey", countryCode: "TR", currencyName: "Turkish Lira", currencySymbol: "&#x20BA;", currencyCode: "TRY", languageCode: "tr" },
	{ country: "Turkmenistan", countryCode: "TM", currencyName: "Turkmenistan Manat", currencySymbol: "m", currencyCode: "TMT", languageCode: "tk" },
	{ country: "Tuvalu", countryCode: "TV", currencyName: "Australian Dollar", currencySymbol: "&#x24;", currencyCode: "AUD", languageCode: "en" },
	{ country: "Uganda", countryCode: "UG", currencyName: "Ugandan Shilling", currencySymbol: "UGX", currencyCode: "UGX", languageCode: "en" },
	{ country: "Ukraine", countryCode: "UA", currencyName: "Ukrainian Hryvnia", currencySymbol: "&#x20B4;", currencyCode: "UAH", languageCode: "uk" },
	{ country: "United Arab Emirates", countryCode: "AE", currencyName: "United Arab Emirates Dirham", currencySymbol: "AED", currencyCode: "AED", languageCode: "ar" },
	{ country: "United Kingdom", countryCode: "GB", currencyName: "Pound Sterling", currencySymbol: "&#xA3;", currencyCode: "GBP", languageCode: "en" },
	{ country: "United States", countryCode: "US", currencyName: "United States Dollar", currencySymbol: "&#x24;", currencyCode: "USD", languageCode: "en" },
	{ country: "Uruguay", countryCode: "UY", currencyName: "Uruguayan Peso", currencySymbol: "$", currencyCode: "UYU", languageCode: "es" },
	{ country: "Uzbekistan", countryCode: "UZ", currencyName: "Uzbekistani Som", currencySymbol: "&#x428;&#x443;", currencyCode: "UZS", languageCode: "uz" },
	{ country: "Vanuatu", countryCode: "VU", currencyName: "Vanuatu Vatu", currencySymbol: "Vt", currencyCode: "VUV", languageCode: "bi" },
	{ country: "Vatican City", countryCode: "VA", currencyName: "Euro", currencySymbol: "&#x20AC;", currencyCode: "EUR", languageCode: "la" },
	{ country: "Venezuela", countryCode: "VE", currencyName: "Venezuelan Bolívar", currencySymbol: "Bs.", currencyCode: "VES", languageCode: "es" },
	{ country: "Vietnam", countryCode: "VN", currencyName: "Vietnamese Đồng", currencySymbol: "&#x20AB;", currencyCode: "VND", languageCode: "vi" },
	{ country: "Wallis and Futuna", countryCode: "WF", currencyName: "CFP Franc", currencySymbol: "&#x20A3;", currencyCode: "XPF", languageCode: "fr" },
	{ country: "Western Sahara", countryCode: "EH", currencyName: "Moroccan Dirham", currencySymbol: "&#x62F;&#x645;", currencyCode: "MAD", languageCode: "ar" },
	{ country: "Yemen", countryCode: "YE", currencyName: "Yemeni Rial", currencySymbol: "&#x63A;&#x64A;", currencyCode: "YER", languageCode: "ar" },
	{ country: "Zambia", countryCode: "ZM", currencyName: "Zambian Kwacha", currencySymbol: "ZK", currencyCode: "ZMW", languageCode: "en" },
	{ country: "Zimbabwe", countryCode: "ZW", currencyName: "Zimbabwean Dollar", currencySymbol: "Z$", currencyCode: "ZWL", languageCode: "en" }
];


















let allAvailableDishApi = [
	{
		"dishId": "1234567890",
		"dishName": "Fried Rice And 2 chicken with salad",
		"imageUrl": "images/dish/1234567890.png",
		"category": "main-dish,nigerian,trending",
		"dishType": "main",
		"individualDishes": [
			{
				"dishId": "1234567890",
				"priceVariantId":  "v002",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
			{
				"dishId": "2345678910",
				"priceVariantId":  "v002",
				"customizationOptionId":  "o002",	//(text* || null)
				"quantity": "2",
			},
			{
				"dishId": "2345678912",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
		],
		"availableAddons": [
			"1234567892",
			"2345678910",
			"2345678911",
			"2345678912",
		],
	},
	{
		"dishId": "1234567891",
		"dishName": "Jollof Rice And chicken with plantain",
		"imageUrl": "images/dish/1234567891.png",
		"category": "main-dish,nigerian,trending",
		"dishType": "main",
		"individualDishes": [
			{
				"dishId": "1234567891",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
			{
				"dishId": "2345678910",
				"priceVariantId":  "v002",
				"customizationOptionId":  "o002",	//(text* || null)
				"quantity": "1",
			},
			{
				"dishId": "2345678911",
				"priceVariantId":  "v001",
				"customizationOptionId":  "o001",	//(text* || null)
				"quantity": "1",
			},
		],
		"availableAddons": [
			"1234567892",
			"2345678910",
			"2345678911",
			"2345678912",
		],
	},
	{
		"dishId": "1234567892",
		"dishName": "Beef Stew",
		"imageUrl": "images/dish/1234567892.png",
		"category": "Addon,nigerian,stew",
		"dishType": "addon",
		"individualDishes": [
			{
				"dishId": "1234567892",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
		],
		"availableAddons": [
			"1234567890",
			"1234567891",
			"2345678910",
			"2345678911",
		],
	},
	{
		"dishId": "1234567893",
		"dishName": "Chicken Thigh(Two Pieces)",
		"imageUrl": "images/dish/1234567893.png",
		"category": "main-dish,nigerian",
		"dishType": "main",
		"individualDishes": [
			{
				"dishId": "2345678910",
				"priceVariantId":  "v002",
				"customizationOptionId":  "o001",	//(text* || null)
				"quantity": "2",
			},
		],
		"availableAddons": [],
	},
	{
		"dishId": "0000000001",
		"dishName": "White Rice And vegetable stew with plantain",
		"imageUrl": "images/dish/white-rice-and-vegetable-stew-with-plantain.jpeg",
		"category": "main-dish,nigerian",
		"dishType": "main",
		"individualDishes": [
			{
				"dishId": "00000000015",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
			{
				"dishId": "00000000016",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
			{
				"dishId": "2345678911",
				"priceVariantId":  "v001",
				"customizationOptionId":  "o001",	//(text* || null)
				"quantity": "1",
			},
		],
		"availableAddons": [
			"00000000016",
			"0000000007",
			"0000000006",
			"2345678912",
			"2345678911",
			"2345678910",
			"1234567892",
		],
	},
	{
		"dishId": "0000000002",
		"dishName": "White Rice And Stew with Plantain and Fish",
		"imageUrl": "images/dish/white-rice-and-stew-with-plantain-and-fish.jpeg",
		"category": "main-dish,nigerian,trending",
		"dishType": "main",
		"individualDishes": [
			{
				"dishId": "00000000015",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
			{
				"dishId": "1234567892",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
			{
				"dishId": "2345678911",
				"priceVariantId":  "v001",
				"customizationOptionId":  "o001",	//(text* || null)
				"quantity": "1",
			},
			{
				"dishId": "0000000006",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
		],
		"availableAddons": [
			"00000000016",
			"0000000007",
			"0000000006",
			"2345678912",
			"2345678911",
			"2345678910",
			"1234567892",
		],
	},
	{
		"dishId": "0000000003",
		"dishName": "Eba Wrap and Okro soup",
		"imageUrl": "images/dish/eba-wrap-and-okro-soup.png",
		"category": "main-dish,nigerian,trending",
		"dishType": "main",
		"individualDishes": [
			{
				"dishId": "0000000004",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
			{
				"dishId": "00000000010",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
			{
				"dishId": "0000000006",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
		],
		"availableAddons": [
			"0000000004",
			"00000000010",
			"0000000006",
			"0000000007",
		],
	},
	{
		"dishId": "0000000004",
		"dishName": "Chicken Bourguignon Bowl",
		"imageUrl": "images/dish/chicken-bourguignon-bowl.jpg",
		"category": "main-dish",
		"dishType": "main",
		"individualDishes": [
			{
				"dishId": "00000000013",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
		],
		"availableAddons": [],
	},
	{
		"dishId": "0000000005",
		"dishName": "Mexican Burrito Bowl",
		"imageUrl": "images/dish/mexican-burrito-bowl.jpg",
		"category": "main-dish",
		"dishType": "main",
		"individualDishes": [
			{
				"dishId": "00000000014",
				"priceVariantId":  "v001",
				"customizationOptionId":  "null",	//(text* || null)
				"quantity": "1",
			},
		],
		"availableAddons": [],
	},
]







var adminDetailsApi = {
	adminExists: 'false',
	id: "01",
	adminId: "1234567890",
	accountType: "live", //(demo || live)
	adminRole: "super-admin", //(super-admin || admin )
	email: "test@gmail.com",
	// password: "",
	accountStatus: "active", //(active || inactive )
	// loginSessionId: 'h9f2hff20h3nbf0239nf01h9f2hff20h3nbf0239',
	lastSeen: "2024-01-27 16:00:00", //( *date || null )
	// notes: "",
	// createdBy: "0123456789",  //( *adminId || system )
	createdDate: "2024-01-27 16:00:00",
	updatedDate: "2024-01-27 16:00:00",
	loginActivityApi: [
		{
			id: '1234567890',
			adminId: '1234567890',
			deviceId: '1234567890',
			device: 'Redmi Note 8 Pro Build',
			platform: 'website',	//( app || website )
			activityArray: [
				{
					id: "1234567891",
					action: "logged-in",  //( logged-in || logged-out || created-account)
					location: 'Nigeria - FCT - ABUJA',
					ipAddress: '443.61.123.1',
					date: "2023-03-19 13:50:00",
				},
				{
					id: "1234567892",
					action: "logged-out",  //( logged-in || logged-out || created-account)
					location: 'Nigeria - FCT - ABUJA',
					ipAddress: '6456.61.123.1',
					date: "2023-04-19 13:50:00",
				},
			],
			isLoggedOut: 'true', //( true || false )
			lastSeen: "2024-01-27 16:00:00", //( *date || null )
			regDate: "2023-04-19 13:50:00",
		}
	],
};















