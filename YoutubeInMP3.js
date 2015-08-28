	// ==UserScript==
	// @name                YoutubeInMP3
	// @namespace	        tag:rinrynque@protonmail.ch,2015-08-27:YoutubeInMP3
	// @description	        simple button to download an mp3 from youtube
	// @include		https://www.youtube.com/watch*
	// @include		https://youtube.com/watch*
	// @include		http://www.youtube.com/watch*
	// @include		http://youtube.com/watch*
	// ==/UserScript==
var el = document.getElementById("action-panel-overflow-button");
el.addEventListener("click", addDlLink, false);

function addDlLink () {
	var dlButton = document.getElementById('DLButton');
	if (!dlButton)
	{
	var elmNewContent = document.createElement('a');
	elmNewContent.id = 'DLButton';
	elmNewContent.href = 'http://youtubeinmp3.com/fetch/?video='+encodeURIComponent(document.URL)+"&hq=1";
	elmNewContent.appendChild(document.createTextNode('Download MP3'));
	var elmFoo = document.getElementById('watch7-views-info');
	elmFoo.parentNode.insertBefore(elmNewContent, elmFoo);
	}
	else
	{
		dlButton.parentNode.removeChild(dlButton);
	}
}