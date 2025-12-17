// for (let i = 1; i <= 100; i++)

// console.log(i);

const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

for (let i = 0; i < str.length; i++) {
	if (str[i] == ",") {
		continue;
	}

	console.log(str[i]);
}