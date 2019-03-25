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

			// Fill the list of 10 images with random ones from the pool
			for(var i = 0; i < 10; i++)
			{
				var Picture = ChangeImage();
				PictureSet.push(Picture);
			}

			for(var i = 0; i < 10; i++)
			{
				document.getElementById("author" + i).innerHTML = PictureSet[i].author;
				document.getElementById("img" + i).innerHTML = PictureSet[i].author_link;
			}

			// var picSet = [	"<img class='pic' src='https://picsum.photos/200?image=" + picList[63].id + "'>", 
			// 				"<img class='pic' src='https://picsum.photos/200?image=" + picList[86].id + "'>",
			// 				"<img class='pic' src='https://picsum.photos/200?image=" + picList[545].id + "'>",
			// 				"<img class='pic' src='https://picsum.photos/200?image=" + picList[330].id + "'>",
			// 				"<img class='pic' src='https://picsum.photos/200?image=" + picList[152].id + "'>",
			// 				"<img class='pic' src='https://picsum.photos/200?image=" + picList[135].id + "'>",
			// 				"<img class='pic' src='https://picsum.photos/200?image=" + picList[255].id + "'>",
			// 				"<img class='pic' src='https://picsum.photos/200?image=" + picList[219].id + "'>",
			// 				"<img class='pic' src='https://picsum.photos/200?image=" + picList[774].id + "'>",
			// 				"<img class='pic' src='https://picsum.photos/200?image=" + picList[84].id + "'>"
			// 			];

			//  var imgString = "";
			//  var authorString = "";
			//  for(var i = 0; i < picSet.length; i++)
			//  {
			//  	imgString += picSet[i];

			//  	var link = picList[i].author_url;
			//  	authorString += "<a href=author_url>Author_Link</a>"
			//  }
			 
			//  document.getElementById("gallery").innerHTML = imgString;
			//  document.getElementById("author").innerHTML = authorString;
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
	 	author_link:'<a href="' + picList[num].author_url + '">'+
	 				'<img class="pic" src="https://picsum.photos/200?image=' + picList[num].id + '">'+
	 				'</a>'
	};
	return Picture;
}

// When an image is moused over
function MouseRollover(Image)
{
	var Picture = ChangeImage();

	Image.author = Picture.author;
	Image.author_link = Picture.author_link;
	Image.img = Picture.img;
}

// When an image is moused over
function MouseOut(Image)
{
	// for(var i = 0; i < PictureSet.length; i++)
	// {
	// 	if(PictureSet[i].author == Image.author)
	// 	{
	// 		PictureSet[i] = ChangeImage();
	// 		document.getElementById("author" + i).innerHTML = PictureSet[i].author;
	// 		document.getElementById("img" + i).innerHTML = PictureSet[i].author_link;
	// 		console.log("Worked");
	// 	}

	// }
}