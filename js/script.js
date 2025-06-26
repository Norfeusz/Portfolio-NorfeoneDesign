/*burger menu*/
const burgerBtn = document.querySelector('.burger-icon')
const burgerMenu = document.querySelector('.burger-menu')
const closeMenuBtn = document.querySelector('.close-menu')
const all = document.querySelector('.all')

burgerBtn.addEventListener('click', () => {
	burgerMenu.classList.add('active')
	all.classList.add('close-all')
})
closeMenuBtn.addEventListener('click', () => {
	burgerMenu.classList.remove('active')
	all.classList.remove('close-all')
})

/*o mnie*/
const aboutMeSections = document.querySelectorAll('.about-me-box')

aboutMeSections.forEach(section => {
	const aboutMeBtn = section.querySelector('button')
	aboutMeBtn.addEventListener('click', () => {
		const h3AboutMe = section.querySelector('h3')
		h3AboutMe.classList.toggle('about-me-h3-visable')
		const pAboutMe = section.querySelector('p')
		pAboutMe.classList.toggle('about-me-p-visable')
	})
})

/*zmiana języka */

// const nav = document.querySelectorAll('.nav')

const burgerEnglishBtn = document.querySelector('.burger-english')
const burgerPolishBtn = document.querySelector('.burger-polish')
const englishBtn = document.querySelector('.english')
const polishBtn = document.querySelector('.polish')

const seeCv = document.querySelector('.see-cv')
const downloadCv = document.querySelector('.download-cv')

const dictionary = {
	/*header i nawigacja*/
	road: { pl: 'w drodze na szczyt możliwości', en: 'in the way to top of possibilities' },
	about: { pl: 'o mnie', en: 'about me' },
	aboutburger: { pl: 'o mnie', en: 'about me' },
	experience: { pl: 'doświadczenie', en: 'experience' },
	experienceburger: { pl: 'doświadczenie', en: 'experience' },
	projects: { pl: 'projekty', en: 'projects' },
	projectsburger: { pl: 'projekty', en: 'projects' },
	contact: { pl: 'kontakt', en: 'contact' },
	contactburger: { pl: 'kontakt', en: 'contact' },
	/*aboutme*/
	aboutmeh2: { pl: 'o mnie', en: 'about me' },
	renaissanceh3: { pl: 'człowiek renesansu', en: 'renaissance man' },
	renaissancep: {
		pl: 'Nie straszne mi żadne nowe wyzwanie, ani żadna praca. Od roku pracuję w digital marketingu, w dziale traffic. W przeszłości miałem	okazję sprawdzać swoje siły w różnych branżach. Jako inżynier logistyki pracowałem na kilku	magazynach, zarówno polskich jak i zagranicznych, jako szeregowy magazynier, ale także na stanowiskach zarządczych. W gastronomii świetnie odnajdywałem się na kuchni w roli pizzera oraz za kółkiem rozwożąc zamówienia. Byłem redaktorem poczytnego serwisu piłkarskiego, pisząc relacje z meczów, artykuły, czy przeprowadzając wywiady z piłkarzami. Rozwoziłem nie tylko jedzenie, ale i ludzi jako kierowca ubera.',
		en: 'I am not afraid of any new challenge or job. I have been working in digital marketing for a year, in the traffic department. In the past, I have had the opportunity to test my skills in various industries. As a logistics engineer, I worked in several warehouses, both Polish and foreign, as a regular warehouse worker, but also in managerial positions. In gastronomy, I excelled in the kitchen as a pizza maker and behind the wheel delivering orders. I was an jurnalist for a popular soccer website, writing match reports, articles, and conducting interviews with players. I delivered not only food but also people as an Uber driver.',
	},
	passionh3: { pl: 'nowa pasja', en: 'new passion' },
	passionp: {
		pl: ' Po latach przepracowanych w różnych branżach, wykonując zajęcia, które nie			przyprawiały mnie o szybsze bicie serca, lub nie zaspokajały moich potrzeb finansowych,			zdecydowałem się na kolejny krok. Początkowo programowanie miało głównie zadbać o ten drugi			aspekt. Jednak z każdą napisaną linijką kodu, która przynosi efekt na tworzonej w danym momencie			stronie staje się to moją pasją. Naukę języków traktuję jako inwestycję w siebie, w swoją			przyszłość, ale także jako świetną rozrywkę. Napisanie dobrej linijki kodu przynosi mi			niemniejszą satysfakcję niż napisanie wersu utworu. Programowanie od 2023 roku to moja pasja!',
		en: "After years spent in various industries, doing jobs that didn't make my heart beat faster or satisfy my financial needs, I decided to take the next step. Initially, programming was meant to take care about fincancial aspect of my life. However, with every line of code written, which brings results on the website I'm currently working on, it becomes my passion. I see learning languages as an investment in myself, in my future, but also as great entertainment. Writing a good line of code brings me no less satisfaction than writing a verse of song. Programming since 2023 has been my passion!",
	},

	hobbiesh3: { pl: 'zajawki', en: 'hobbies' },
	hobbiesp: {
		pl: 'Uwielbiam spędzać aktywnie czas, od zawsze wielką rolę w moim życiu odgrywał sport. Od		najmłodszych lat pływałem, grałem w siatkówkę, biegałem. Na pierwszym miejscu niepodważalnie		jest jednak piłka nożna. Niestety kontuzje kolan sprawiły, że dzisiaj moje związki z futbolem		ograniczyły się do kibicowania, a aktywny aspekt tej zajawki został zastąpiony wspinaczką.		Kolejną niezwykle istotną częścią mojego życia jest muzyka, głównie rockowa i rapowa. Jeśli		chodzi o ten drugi gatunek, amatorsko tworzę swoje teksty, które znajdują swój wyraz na płytach.		Lubię także podróżować, odkrywać nowe miejsca.',
		en: "	I love to spend my time actively, and sports have always played a huge role in my life. From a young age, I've been swimming, playing volleyball, and running. However, unquestionably, football has always been my passion number one. Unfortunately, knee injuries have limited my involvement in football to being a fan, and the active aspect of this passion has been replaced by climbing. Another incredibly important part of my life is music, mainly rock and rap. I create my own lyrics of rap songs, which find expression on albums. I also enjoy traveling and discovering new places.",
	},

	privateh3: { pl: 'prywatnie', en: 'privately' },
	privatep: {
		pl: ' Jestem jedynakiem. Mam za to najcudowniejszych rodziców, najukochańszą dziewczynę i paczkę		najwspanialszych znajomych pod słońcem i najwierniejszego psiaka adoptowanego ze schroniska. Choć już nie mieszkam w rodzinnym domu, mogę śmiało		powiedzieć, że mam trzy najfajniejsze przyszywane pieski i trzy najśmieszniejsze koty na świecie (cała szóstka		została z rodzicami).',
		en: 'I am an only child. I have the most wonderful parents, the most beloved girlfriend, a bunch of the most wonderful friends under the sun and the most loyal dog adopted from a shelter. Although I no longer live in my family home, I can safely say that I have three of the coolest foster dogs and three of the funniest cats in the world (all six stayed with my parents).',
	},
	/*doświadczenie*/
	experienceh2: { pl: 'edukacja', en: 'education' },
	yearstable: { pl: 'lata', en: 'years' },
	schooltable: { pl: 'szkoła', en: 'school' },
	profiletable: { pl: 'profil', en: 'profile' },
	
	uek: { pl: 'Uniwersytet Ekonomiczny w Krakowie', en: 'Cracow University of Economics' },
	engineer: { pl: 'inżynier logistyki międzynarodowej', en: 'international logistics engineer' },
	highschool: { pl: 'VII Liceum ogólnokształcące w Krakowie', en: 'VII High School in Cracow' },
	matphis: { pl: 'mat-fiz', en: 'mathematics and physic' },

	works: { pl: 'praca', en: 'works' },
	companytable: { pl: 'firma', en: 'company' },
	positiontable: { pl: 'stanowisko', en: 'position' },

	coordinator: { pl: 'Koordynator ds. logistyki', en: 'Logistics Coordinator' },
	driver: { pl: 'Kierowca', en: 'Driver' },
	pizzer: { pl: 'Pizzer', en: 'Pizzer-man' },
	delivery: { pl: 'Dostawca', en: 'Delivery-man' },
	warehouselog: { pl: 'Logistyk Magazynu', en: 'Warehouse Logistic' },
	jurnalist: { pl: 'Redaktor', en: 'Jurnalist' },
	warehouseman: { pl: 'Magazynier', en: 'Warehouse Worker' },

	skills: { pl: 'umiejętności', en: 'skills' },

	intermediate: { pl: 'średnio-zaawanoswany', en: 'intermediate' },
	basic: { pl: 'podstawowy', en: 'basic' },
	englishskill: { pl: 'Język angielski', en: 'English language' },
	drivingl: { pl: 'Prawo jazdy', en: 'Driving license' },
	forklifts: { pl: 'Obsługa wózków widłowych', en: 'Forklifts operation' },
	udt: { pl: 'Uprawdnienia UTD', en: 'UDT qualifications' },


	/*projekty*/
	projectsh2: { pl: 'Moje projekty', en: 'My projects' },
	website: { pl: 'strona', en: 'website' },
	converterh3: { pl: 'konwerter temperatury:', en: 'Temperature converter' },
	financesh3: { pl: 'menadżer finansów', en: 'financial manager' },
	timerh3: { pl: 'stoper', en: 'stopwatch' },
	notepadh3: { pl: 'notatnik', en: 'notepad' },
	countdownh3: { pl: 'odliczanie czasu', en: 'countdown timer' },
	billsplitterh3: { pl: 'kalkulator napiwków', en: 'billsplitter' },
	walidatorh3: { pl: 'walidator hasła', en: 'password validator' },
	weatherh3: { pl: 'apka pogodowa', en: 'weather app' },
	drinksh3: { pl: 'wyszukiwarka napojów', en: 'drinks searcher' },
	/*kontakt*/
	seecvs: { pl: 'Zobacz CV', en: 'See CV' },
	downloadcvs: { pl: 'Pobierz CV', en: 'Download CV' },
	phone: { pl: 'telefon / WhatsApp:', en: 'phone / WhatsApp:' },

}

const setLanguage = language => {
	for (const translation in dictionary) {
		const objectsToTranslate = document.querySelectorAll(`.${translation}`)
		if (objectsToTranslate.length > 0) {
			objectsToTranslate.forEach(objectToTranslate => {
				objectToTranslate.textContent = dictionary[translation][language]
			})
		}
	}
	localStorage.setItem('language', language)
}

const englishLanguage = () => {
	setLanguage('en')
}

const polishLanguage = () => {
	setLanguage('pl')
}

englishBtn.addEventListener('click', englishLanguage)
polishBtn.addEventListener('click', polishLanguage)
burgerEnglishBtn.addEventListener('click', englishLanguage)
burgerPolishBtn.addEventListener('click', polishLanguage)

window.addEventListener('load', () => {
	const savedLanguage = localStorage.getItem('language')
	if (savedLanguage === 'en') {
		englishLanguage()
	} else if (savedLanguage === 'pl') {
		polishLanguage()
	}
})
