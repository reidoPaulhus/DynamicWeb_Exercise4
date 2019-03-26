window.onload = init;

// The list that will contain the API LoremIpsum images
var picList;
var PictureSet = [];

// Function initializes upon loading the page
function init() 
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://picsum.photos/list", true);
	xhr.send(null);

	xhr.onload = function()
	{
		// If the API was able to connect
		if(xhr.status == 200)
		{
			// IMPORTANT to unpack data
			picList = JSON.parse(xhr.responseText);
			console.log(picList);

			for(var i = 0; i < 10; i++)
			{
				var Picture = ChangeImage();
				PictureSet.push(Picture);
				document.getElementById("img" + i).innerHTML = PictureSet[i].author_link;
				document.getElementById("box" + i).innerHTML = PictureSet[i].author;
			}
		}
	}
}

// Generate a new image from the pool
function ChangeImage()
{
	var num = Math.floor(Math.random() * picList.length);
	var Picture = {
	  	img: '<img class="pic" src="https://picsum.photos/200?image=' + picList[num].id + '">',
	  	author: picList[num].author,
	 	author_link:'<a href="' + picList[num].post_url + '">'+
	 				'<img class="pic" src="https://picsum.photos/200?image=' + picList[num].id + '">' +
	 				'</a>'
	};
	return Picture;
}

// When an image is moused over
function MouseOut(Image, i)
{
	var P = ChangeImage();
	document.getElementById(Image.id).innerHTML = P.author_link;
	document.getElementById("box" + i).innerHTML = P.author;
}