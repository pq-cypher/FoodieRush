// let LSobj = {
// 	loginSessionId: "h9f2hff20h3nbf0239nf01",
// 	deviceId: "012345",
// 	siteTheme: "dark-theme",
// };
// localStorage.setItem("userLoginSession",JSON.stringify(LSobj));

// let LSobj = {
// 	loginSessionId: "h9f2hff20h3nbf0239nf01",
// };
// localStorage.setItem("adminLoginSession",JSON.stringify(LSobj));

let loadDemoData = true;

if ( loadDemoData == false ) {
	siteDetailsApi = {};
	userDetailsApi = {};
	adminDetailsApi = {};
}

let server_dateFormat_UTC;
let server_dateObj_userTimezone;
let server_dateFormat_userTimezone;

/// GET WEBSITE DATA FROM LIVE SERVER
async function getWebsiteData(mode,executeOnSuccess,executeOnFailure){
	(mode != "silent") ? showLoadingModal("show") : false;

	if ( loadDemoData == true ) {
		server_dateFormat_UTC = siteDetailsApi.utcDate;
		server_dateObj_userTimezone = formatUtcToUserTimezone(server_dateFormat_UTC)
		server_dateFormat_userTimezone = formatDateToDateFormat(server_dateObj_userTimezone);
		loadWebsiteData();
		insertSiteDetailsIntoWebPage();
		addClickEventToAllModals();
		loadPage();

		(mode != "silent") ? showLoadingModal("hide") : false;
		(executeOnSuccess != null) ? executeOnSuccess() : false;
	}else{
		let postDataArr = `website-data=true${constructGetWebsiteDataParam(getWebsiteDataUrl)}`.split("&");
		let postData = new FormData();
		for (let x = 0; x < postDataArr.length; x++) {
			postData.append(postDataArr[x].split("=")[0], postDataArr[x].split("=")[1]);
		}
		$.ajax({
			url:"/php/get-website-data.php",
			data:postData,
			type:"POST",
			dataType:"json",
			contentType:false,
			processData:false,
			success:function(data){
				siteDetailsApi = JSON.parse(JSON.stringify(data))["site-details-api"];
				userDetailsApi = JSON.parse(JSON.stringify(data))["user-details-api"];
				adminDetailsApi = JSON.parse(JSON.stringify(data))["admin-details-api"];
				coinMarketCapApi = JSON.parse(JSON.stringify(data))["coinMarketCapApi"];
				
				server_dateFormat_UTC = siteDetailsApi.utcDate;
				server_dateObj_userTimezone = formatUtcToUserTimezone(server_dateFormat_UTC)
				server_dateFormat_userTimezone = formatDateToDateFormat(server_dateObj_userTimezone);
				loadWebsiteData();
				insertSiteDetailsIntoWebPage();
				addClickEventToAllModals();
				loadPage();
				(mode != "silent") ? showLoadingModal("hide") : false;
				(executeOnSuccess != null) ? executeOnSuccess() : false;
			},
			error:function(jqXHR,textStatus,errorThrown)
			{		
				// let msg = '';if (jqXHR.status === 0) {msg = 0;} else if (jqXHR.status == 404) {msg = 1;} else if (jqXHR.status == 500) {msg = 1;} else if (textStatus === 'parsererror') {msg = 1;} else if (textStatus === 'timeout') {msg = 1;} else if (textStatus === 'abort') {msg = 1;} else {msg = 1;}
                (mode != "silent") ? showLoadingModal('hide') : false;
                (executeOnFailure != null) ? executeOnFailure() : false;
			}
		});
	}
}

getWebsiteData("silent");


function reloadWebsiteData(websiteData , reloadPage){
	(websiteData['site-details-api'] != null) ? (Object.keys(websiteData['site-details-api']).length != 0) ? siteDetailsApi = websiteData['site-details-api'] : false : false;
	(websiteData['user-details-api'] != null) ? (Object.keys(websiteData['user-details-api']).length != 0) ? userDetailsApi = websiteData['user-details-api'] : false : false;
	(websiteData['admin-details-api'] != null) ? (Object.keys(websiteData['admin-details-api']).length != 0) ? adminDetailsApi = websiteData['admin-details-api'] : false : false;
	
	if (reloadPage !== false) {
		server_dateFormat_UTC = siteDetailsApi.utcDate;
		server_dateObj_userTimezone = formatUtcToUserTimezone(server_dateFormat_UTC)
		server_dateFormat_userTimezone = formatDateToDateFormat(server_dateObj_userTimezone);
		loadWebsiteData();
		insertSiteDetailsIntoWebPage();
		addClickEventToAllModals();
		loadPage();
	}
}

function constructGetWebsiteDataParam(string){
	let getString = "";
	getString += ( string.includes("user-details-api") ) ? `&user-details-api=${websiteUserLoginSession.loginSessionId}&device-id=${getDeviceId()}` : `&user-details-api=false`;
	getString += ( string.includes("admin-details-api") ) ? `&admin-details-api=${websiteAdminLoginSession.loginSessionId}&device-id=${getDeviceId()}` : `&admin-details-api=false`;
	return getString;
}

/// INSERT COMPANY NAME, WEBSITE NAME, WEBSITE URL AND COMPANY ADDRESS TO WEBSITE PAGE 
function insertSiteDetailsIntoWebPage(){
	let companyNameDataText = document.querySelectorAll("#company-name-data-text");
	let websiteNameDataText = document.querySelectorAll("#website-name-data-text");
	let websiteUrlDataText = document.querySelectorAll("#website-url-data-text");
	let companyAddressDataText = document.querySelectorAll("#company-address-data-text");
	let companyWhatsappDataText = document.querySelectorAll("#company-whatsapp-data-text");
	let companyTelegramDataText = document.querySelectorAll("#company-telegram-data-text");
	let companyInstagramDataText = document.querySelectorAll("#company-instagram-data-text");
	let companyTiktokDataText = document.querySelectorAll("#company-tiktok-data-text");
	let companyEmailDataText = document.querySelectorAll("#company-email-data-text");

	for (let x = 0; x < companyNameDataText.length; x++) {companyNameDataText[x].innerHTML = siteDetailsApi.companyName;}
	for (let x = 0; x < websiteNameDataText.length; x++) {websiteNameDataText[x].innerHTML = siteDetailsApi.websiteName;}
	for (let x = 0; x < websiteUrlDataText.length; x++) {websiteUrlDataText[x].innerHTML = siteDetailsApi.websiteUrl;}
	for (let x = 0; x < companyAddressDataText.length; x++) {companyAddressDataText[x].innerHTML = siteDetailsApi.companyAddress;}
	for (let x = 0; x < companyWhatsappDataText.length; x++) {
		companyWhatsappDataText[x].innerHTML = "";
		for (let y = 0; y < siteDetailsApi.customerSupport.whatsappArray.length; y++) {
			let arr = siteDetailsApi.customerSupport.whatsappArray[y];
			let string = (y == 0) ? "" : ",";
			companyWhatsappDataText[x].innerHTML += `${string} <a href="${arr.whatsappUrl}">${arr.whatsapp}</a>`;
		}
	}
	for (let x = 0; x < companyTelegramDataText.length; x++) {
		companyTelegramDataText[x].innerHTML = "";
		for (let y = 0; y < siteDetailsApi.customerSupport.telegramArray.length; y++) {
			let arr = siteDetailsApi.customerSupport.telegramArray[y];
			let string = (y == 0) ? "" : ",";
			companyTelegramDataText[x].innerHTML += `${string} <a href="${arr.telegramUrl}">${arr.telegram}</a>`;
		}
	}
	for (let x = 0; x < companyInstagramDataText.length; x++) {
		companyInstagramDataText[x].innerHTML = "";
		for (let y = 0; y < siteDetailsApi.customerSupport.instagramArray.length; y++) {
			let arr = siteDetailsApi.customerSupport.instagramArray[y];
			let string = (y == 0) ? "" : ",";
			companyInstagramDataText[x].innerHTML += `${string} <a href="${arr.instagramUrl}">${arr.instagram}</a>`;
		}
	}
	for (let x = 0; x < companyTiktokDataText.length; x++) {
		companyTiktokDataText[x].innerHTML = "";
		for (let y = 0; y < siteDetailsApi.customerSupport.tiktokArray.length; y++) {
			let arr = siteDetailsApi.customerSupport.tiktokArray[y];
			let string = (y == 0) ? "" : ",";
			companyTiktokDataText[x].innerHTML += `${string} <a href="${arr.tiktokUrl}">${arr.tiktok}</a>`;
		}
	}
	for (let x = 0; x < companyEmailDataText.length; x++) {
		companyEmailDataText[x].innerHTML = "";
		for (let y = 0; y < siteDetailsApi.customerSupport.emailArray.length; y++) {
			let arr = siteDetailsApi.customerSupport.emailArray[y];
			let string = (y == 0) ? "" : ",";
			companyEmailDataText[x].innerHTML += `${string} <a href="${arr.emailUrl}">${arr.email}</a>`;
		}
	}
}

function addClickEventToAllModals(){
	let modals = document.querySelectorAll(".modal");
	for (let x = 0; x < modals.length; x++) {
		$(modals[x]).off('click');
		$(modals[x]).on('click', function(event){(event.target == this) ? showModals(this,"hide") : false });
		// modals[x].addEventListener("click",function(event){(event.target == this) ? showModals(this,"hide") : false });
	}
}

function addClickEventToModal(modal){
	$(modal).on('click', function(event){(event.target == this) ? showModals(this,"hide") : false });
}
function removeClickEventFromModal(modal){
	$(modal).off();
}

///ADD GOOGLE TRANSLATOR TO WEBSITE PAGE
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
}


function formatDateToDateFormat(dateObj){
	function formatToDoubleDigits(val){
		string = val.toString();
		if(string.length == 1){
			string = '0'+string;
		}
		return string;
	}
	var year = dateObj.getFullYear();
	var month = dateObj.getMonth()+1;
	var day = dateObj.getDate();
	var hour = dateObj.getHours();
	var minute = dateObj.getMinutes();
	var seconds = dateObj.getSeconds();
	
	var formatedDate = year+'-'+formatToDoubleDigits(month)+'-'+formatToDoubleDigits(day)+' '+formatToDoubleDigits(hour)+':'+formatToDoubleDigits(minute)+':'+formatToDoubleDigits(seconds);
	return formatedDate;
}

function formatUtcToUserTimezone(dateString){
	let arr = dateString.split(/[- :]/);
	dateUTCMilliseconds = Date.UTC(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);	  
	dateObj = new Date(dateUTCMilliseconds);
	return dateObj;
}

function convertToMoneyFormat(val,isCurrency){
	val = val * 1;
	let priceMoneyFormat;
	if (isCurrency == false) {
		priceMoneyFormat = (val).toString().replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.672933
	}else{
		priceMoneyFormat = (val).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
	}
	if(priceMoneyFormat.split(".")[1] == "00"){
		priceMoneyFormat = priceMoneyFormat.split(".")[0];
	}
	return priceMoneyFormat;
}

function formatNullToEmptyString(val){
    if (val.toLowerCase().trim() == "null") {
        return ""
    }
	return val;
}

function formatEmptyStringToNull(val){
    if (val.toLowerCase().trim() == "") {
        return "null"
    }
	return val;
}

function formatDateTextCorrectly(val) {
	// let allowedCharacters = [0,1,2,3,4,5,6,7,8,9,'-',' ',':'];
	let newString = '';
	for (let x = 0; x < val.length; x++) {
		let char = val[x];
		if (x == 0){ if(!isNaN(char)){ newString+= char } }
		if (x == 1){ if(!isNaN(char)){ newString+= char } }
		if (x == 2){ if(!isNaN(char)){ newString+= char } }
		if (x == 3){ if(!isNaN(char)){ newString+= char } }
		if (x == 4){ if(char == "-"){ newString+= char } }
		if (x == 5){ if(!isNaN(char)){ newString+= char } }
		if (x == 6){ if(!isNaN(char)){ newString+= char } }
		if (x == 7){ if(char == "-"){ newString+= char } }
		if (x == 8){ if(!isNaN(char)){ newString+= char } }
		if (x == 9){ if(!isNaN(char)){ newString+= char } }
		if (x != 10){ if(char == " "){ newString+= char } }
		if (x == 11){ if(!isNaN(char)){ newString+= char } }
		if (x == 12){ if(!isNaN(char)){ newString+= char } }
		if (x == 13){ if(char == ":"){ newString+= char } }
		if (x == 14){ if(!isNaN(char)){ newString+= char } }
		if (x == 15){ if(!isNaN(char)){ newString+= char } }
		if (x == 16){ if(char == ":"){ newString+= char } }
		if (x == 17){ if(!isNaN(char)){ newString+= char } }
		if (x == 18){ if(!isNaN(char)){ newString+= char } }
	}
	return newString;
}

function returnAllCountriesStringForSelectTag(){
	let string = `<option value="not-selected">Select A Country</option>`;
	for (let x = 0; x < allCountriesNamesApi.length; x++) {
		string += `<option value="${allCountriesNamesApi[x]}">${allCountriesNamesApi[x]}</option>`;
	}
	return string;
}


function addAutomaticScrollToElement(param){
	let {sliderWrapper = null , sliderContents = null , slideIndicatorWrapper = null , slideIndicators = null , timeoutDelay = null} = param;

	if ((sliderWrapper != null) && (slideIndicatorWrapper != null)) {
		sliderContents = sliderWrapper.querySelectorAll(":scope > *");
		slideIndicators = slideIndicatorWrapper.querySelectorAll(":scope > *");
	}else{ return null}

	if ((sliderWrapper != null) && (sliderContents != null) && (slideIndicatorWrapper != null) && (slideIndicators != null) ) {
		let scrollTimeout  = null;
		let scroll = function(){
			let distanceScrolled = sliderWrapper.scrollLeft;
			let divWidth = sliderWrapper.clientWidth;
			let divScrollableWidth = sliderWrapper.scrollWidth;
			let fullPageScroll = divWidth;
			let halfPageScroll = fullPageScroll/2;

			for (let x = 0; x < slideIndicators.length; x++) {
				slideIndicators[x].classList.remove("active");
			}

			for (let x = 0; x < sliderContents.length; x++) {
				const sliderContent = sliderContents[x];

				let currentLoopPageStartPoint = x; // this is the point of the start of the current loop page to the beginning of the scroll
				let currentLoopPageStartPointValue = currentLoopPageStartPoint * fullPageScroll; // this is the distance of the start of the current loop page to the beginning of the scroll
				let currentLoopPageEndPoint = x + 1; // this is the point of the end of the current loop page to the beginning of the scroll
				let currentLoopPageEndPointValue = currentLoopPageEndPoint * fullPageScroll; // this is the distance of the end of the current loop page to the beginning of the scroll
				let halfPageScrollPoint = (x * 2) + 1; // this is the point of the half of the current loop page to the beginning of the scroll
				let halfPageScrollPointValue = halfPageScrollPoint * halfPageScroll; // this is the distance of the half of the current loop page to the beginning of the scroll
				
				if (x == 0) { //THE FIRST SLIDER CONTENT
					if( ((Math.ceil(distanceScrolled)) >= (0)) && ((Math.ceil(distanceScrolled)) < halfPageScrollPointValue) ){
						if (sliderContents[x+1]) {
							sliderWrapper.scrollBy(fullPageScroll, 0);
							(slideIndicators[x+1] != null) ? slideIndicators[x+1].classList.add("active") : false;
							break;
						}
					}
				}else if (x == (sliderContents.length-1)) { //THE LAST SLIDER CONTENT
					if( ((Math.ceil(distanceScrolled)) >= (halfPageScrollPointValue - fullPageScroll))){
						(slideIndicators[0] != null) ? slideIndicators[0].classList.add("active") : false;
						sliderWrapper.scroll((0), 0);
						break;
					}
				}else{
					if( ((Math.ceil(distanceScrolled)) >= (halfPageScrollPointValue - fullPageScroll)) && ((Math.ceil(distanceScrolled)) < halfPageScrollPointValue) ){
						(slideIndicators[x+1] != null) ? slideIndicators[x+1].classList.add("active") : false;
						sliderWrapper.scrollBy((fullPageScroll), 0);
						break;
					}
				}
			}
		};

		sliderWrapper.addEventListener("scroll", function(){
			clearTimeout(scrollTimeout);
		});
		
		sliderWrapper.addEventListener("scrollend", function(){
			let distanceScrolled = sliderWrapper.scrollLeft;
			let divWidth = sliderWrapper.clientWidth;
			let divScrollableWidth = sliderWrapper.scrollWidth;
			let fullPageScroll = divScrollableWidth/sliderContents.length;
			let halfPageScroll = fullPageScroll/2;

			for (let x = 0; x < sliderContents.length; x++) {
				const sliderContent = sliderContents[x];
				slideIndicators[x].classList.remove("active");

				let currentLoopPageStartPoint = x; // this is the point of the start of the current loop page to the beginning of the scroll
				let currentLoopPageStartPointValue = currentLoopPageStartPoint * fullPageScroll; // this is the distance of the start of the current loop page to the beginning of the scroll
				let currentLoopPageEndPoint = x + 1; // this is the point of the end of the current loop page to the beginning of the scroll
				let currentLoopPageEndPointValue = currentLoopPageEndPoint * fullPageScroll; // this is the distance of the end of the current loop page to the beginning of the scroll
				let halfPageScrollPoint = (x * 2) + 1; // this is the point of the half of the current loop page to the beginning of the scroll
				let halfPageScrollPointValue = halfPageScrollPoint * halfPageScroll; // this is the distance of the half of the current loop page to the beginning of the scroll
				
				if (x == 0) { //THE FIRST SLIDER CONTENT
					if( ((Math.ceil(distanceScrolled)) >= (0)) && ((Math.ceil(distanceScrolled)) < halfPageScrollPointValue) ){
						(slideIndicators[x] != null) ? slideIndicators[x].classList.add("active") : false;
					}
				}else if (x == (sliderContents.length-1)) { //THE LAST SLIDER CONTENT
					if( ((Math.ceil(distanceScrolled)) >= (halfPageScrollPointValue - fullPageScroll))){
						(slideIndicators[x] != null) ? slideIndicators[x].classList.add("active") : false;
					}
				}else{
					if( ((Math.ceil(distanceScrolled)) >= (halfPageScrollPointValue - fullPageScroll)) && ((Math.ceil(distanceScrolled)) < halfPageScrollPointValue) ){
						(slideIndicators[x] != null) ? slideIndicators[x].classList.add("active") : false;
					}
				}
			}
			scrollTimeout = setTimeout(scroll , timeoutDelay);
		});

		scroll();
	}
}


function validateText(string,lowerCase){
	return (lowerCase == true) ? string.trim().toLowerCase() : string.trim();
}

function returnStatusHtmlText(status){
	status = status.toLowerCase();
	let statusText = status;
	if(status == "processed"){statusText = '<span class="status-text processed">Processed</span>'}
	if(status == "active"){statusText = '<span class="status-text active">Active</span>'}
	if(status == "verified"){statusText = '<span class="status-text verified">Verified</span>'}
	if(status == "delivered"){statusText = '<span class="status-text delivered">Delivered</span>'}
	if(status == "pending"){statusText = '<span class="status-text pending">Pending</span>'}
	if(status == "in-transit"){statusText = '<span class="status-text in-transit">In Transit</span>'}
	if(status == "delayed"){statusText = '<span class="status-text delayed">Delayed</span>'}
	if(status == "completed"){statusText = '<span class="status-text completed">Completed</span>'}
	if(status == "sold"){statusText = '<span class="status-text sold">Sold</span>'}
	if(status == "failed"){statusText = '<span class="status-text failed">Failed</span>'}
	if(status == "inactive"){statusText = '<span class="status-text inactive">Inactive</span>'}
	if(status == "cancelled"){statusText = '<span class="status-text cancelled">Cancelled</span>'}
	if(status == "not-verified"){statusText = '<span class="status-text not-verified">Not Verified</span>'}
	return statusText;
}


function getDistanceFromDateTillNow(date){
	let distance = server_dateObj_userTimezone.getTime() - formatUtcToUserTimezone(date).getTime();
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);
	let lastSeen;
	
	if(days > 0){
		lastSeen = (days == 1) ? days+' day' : days+' days';
	}else if(hours > 0){
		lastSeen = (hours == 1) ? hours+' hour' : hours+' hours';
	}else if(minutes > 0){
		lastSeen = (minutes == 1) ? minutes+' minute' : minutes+' minutes';
	}else{
		lastSeen = (seconds == 1) ? seconds+' second' : seconds+' seconds';
	}
	return { distanceInText: lastSeen, distanceInMilliseconds: distance };
}

function shakeAndShowNotification(el){
	el.style.display="block";
	el.style.opacity="1";
	el.style.animation="shake 0.5s linear 0s 2 reverse";
	setTimeout(function(){
		el.style.animation="none";
	},600);
}

function hideNotification(el){
	el.style.opacity='0.0';
	setTimeout(function(){el.style.display='none'},600);
}



let stickyNotificationArray = [];
function toggleStickyNotification(action,type,text){
	let notificationId = `N${Math.floor(Math.random() * 9000) + 1000}`;
	let stickyNotificationWrapper = document.querySelector("#website-sticky-notification-wrapper");
	stickyNotificationWrapper.innerHTML += `
	<p class="notification ${type}" id="${notificationId}"><button class="close-button" onclick="animateStickyNotification('hide','${notificationId}')"><i class="fa fa-times icon"></i></button><span class="text">${text}</span></p>
	`;
	stickyNotificationArray.push(notificationId);
	animateStickyNotification(action,notificationId)
	if (stickyNotificationArray.length > 5) {
		animateStickyNotification("hide",stickyNotificationArray.shift());
	}
}

function animateStickyNotification(action,notificationId){
	setTimeout(function(action,notificationId){
		let notificationEl = document.querySelector(`#website-sticky-notification-wrapper #${notificationId}`);
		if (notificationEl != null) {
			if (action == "show") {
				notificationEl.classList.add("show");
			}
			if (action == "hide") {
				notificationEl.classList.remove("show");
				setTimeout(function(notificationId){
					let notificationEl = document.querySelector(`#website-sticky-notification-wrapper #${notificationId}`);
					notificationEl.classList.add("delete");
					stickyNotificationArray = stickyNotificationArray.filter( v => v !== notificationId);
				},200,notificationId);
			}
			if (action == "show-hide") {
				notificationEl.classList.add("show");
				setTimeout(function(){ animateStickyNotification("hide",notificationId) },5000);
			}
		}
	},10,action,notificationId);
}


function showLoadingModal(action){
    let modal = document.getElementById("loading-modal");
    showModals(modal,action);
}
function showProcessingModal(action){
    let modal = document.getElementById("processing-modal");
    showModals(modal,action);
}

function showUploadingModal(action){
    let modal = document.getElementById("website-uploading-modal");
    showModals(modal,action);
}
function setUploadingProgressBarValue(value){
	let progressBar = document.querySelector("#website-uploading-modal .progress-bar");
	let progressPercent = document.querySelector("#website-uploading-modal .progress-percent");
	progressBar.style.width = `${value}%`;
	progressPercent.innerHTML = `${value}%`;
}


function showModals(modal,action){
	if(!modal){ return null }
	if(action == "show"){
		modal.classList.add("show");
		modal.classList.remove("hide");
		document.body.style.overflow = "hidden";
	}
	if(action == "hide"){
		modal.classList.remove("show");
		modal.classList.add("hide");
		document.body.style.overflow = "auto";
	}
}

function togglePasswordField(el){
    let inputField = el.parentElement.querySelector(".input-field");
    (inputField.type == "password") ? inputField.type = "text" : inputField.type = "password";
}

function showCopiedModal(){
	let copiedModal = document.querySelector("#website-copied-modal");
	copiedModal.classList.add("show");
	setTimeout(function(){copiedModal.classList.remove("show")},3000);
}

function copyToClipboard(text){
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData("Text", text);
    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return prompt("Copy to clipboard: Ctrl+C, Enter", text);
        }
        finally {
            document.body.removeChild(textarea);
	        showCopiedModal();
        }
    }
}


function toggleSplashScreen(action){
	if (!action) { return null }
	let appSplashScreenWrapper = document.querySelector("#app-splash-screen-wrapper");
	if (action == "show") {
		appSplashScreenWrapper.classList.add("show");
		setTimeout(function(appSplashScreenWrapper){
			appSplashScreenWrapper.classList.add("show-logo");
		},100,appSplashScreenWrapper);
	}
	if (action == "hide") {
		appSplashScreenWrapper.style.opacity = "0";
		setTimeout(function(appSplashScreenWrapper){
			appSplashScreenWrapper.className = "app-splash-screen-wrapper";
			appSplashScreenWrapper.style = "";
		},500,appSplashScreenWrapper);
	}
}

function getDeviceId(){
	let deviceId = localStorage.getItem("deviceId");
	if (deviceId != null) {
		return deviceId
	}else{
		deviceId = ( Math.floor(1000000000 + Math.random() * 9000000000) );
		localStorage.setItem("deviceId" , deviceId);
		return deviceId
	}
}

function ajaxCall(ajaxUrl,ajaxData,ajaxSuccess,ajaxError,ajaxProgress){
	let postDataArr = `website-data=true${constructGetWebsiteDataParam(getWebsiteDataUrl)}`.split("&");
	for (let x = 0; x < postDataArr.length; x++) {
		ajaxData.append(postDataArr[x].split("=")[0], postDataArr[x].split("=")[1]);
	}
	$.ajax({
		url:ajaxUrl,
		data:ajaxData,
		type:"POST",
		dataType:"json",
		contentType:false,
		processData:false,
		xhr: function () {
			let xhr = new window.XMLHttpRequest();
			xhr.upload.addEventListener("progress", function (evt) {
				if (evt.lengthComputable) {
					let percentComplete = evt.loaded / evt.total;
					percentComplete = parseInt(percentComplete * 100);
					(ajaxProgress != null) ? ajaxProgress(evt,percentComplete) : false;
				}
			}, false);
			return xhr;
		},
		success:function(data){ajaxSuccess(data)},
		error:function(jqXHR,textStatus,errorThrown)
		{
			var msg='';if(jqXHR.status === 0){msg = 0;}else if(jqXHR.status == 404){msg = 1;}else if(jqXHR.status == 500){msg = 1;}else if(textStatus === 'parsererror'){msg = 1;}else if(textStatus === 'timeout'){msg = 1;} else if(textStatus === 'abort'){msg = 1;}else{msg = 1;}
			ajaxError(jqXHR,textStatus,errorThrown);
		}
	});
}