		var Persons = [{
		        name: 'Alexandra',
		        surname: 'smith',
		        favoritePerformers: ["Albert Einstein"],
		        age: 30,
		        myPhoto: "imgs/girl01.jpg",
		        likes: 0
		    },

		    {
		        name: 'johny',
		        surname: 'Goodman',
		        favoritePerformers: ["Donald Trump"],
		        age: 21,
		        myPhoto: "imgs/man02.jpg",
		        likes: 0
		    },

		    {
		        name: 'Jane',
		        surname: 'Macintosh',
		        favoritePerformers: ["kim jong un"],
		        age: 26,
		        myPhoto: "imgs/girl02.jpg",
		        likes: 0
		    },

		    {
		        name: 'Max',
		        surname: 'Goldsmith',
		        favoritePerformers: ["Reese Witherapoon "],
		        age: 25,
		        myPhoto: "imgs/man01.jpg",
		        likes: 0
		    },

		];

		var i = 0;
		for (i = 0; i < Persons.length; i++) {
		    document.getElementById("demo").innerHTML += "<div>" + " <img src = \" " +
		        Persons[i].myPhoto + " \" > " + "<p>" + " Name: " + "<b>" + Persons[i].name +
		        "</b>" + "<br>" + " surname: " + "<b>" + Persons[i].surname + '</b>' +
		        "<br>" + " favorite Performers: " + "<b>" + Persons[i].favoritePerformers + '</b>'+ "<br>" + " Age: " + "<b>" + Persons[i].age + "</b>" + "</p>" +
		        " <input id=\"btn\" class=\"" + i + "-" + i + "\" type=\"submit\" value=\"Like\">" +
		        "<h1 class = \" " + i + "\" class =\"hed\">" + Persons[i].likes +
		        "</h1>" + "<img class=\"ii\" src=\"imgs/like.png\">" + "</div>";


		    $(document).ready(function() {
		        
		        $(".0-0").click(function() {
		        	var y = 0;
		           y++

		            $(".0").text(y);
		        })
		        $(".1-1").click(function() {
		            var y = 0;
		            y++
		            $(".1").text(y);
		        })
		        
		        $(".2-2").click(function() {
		            var y = 0;
		            y++
		            $(".2").text(y);
		        })
		        $(".3-3").click(function() {
		            var y = 0;
		            y++
		            $(".3").text(y);
		        })

		    });
		};