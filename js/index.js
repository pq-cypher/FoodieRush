var getWebsiteDataUrl = (typeof getWebsiteDataUrl == 'undefined') ? "" : getWebsiteDataUrl;
// getWebsiteDataUrl = (getWebsiteDataUrl == "") ? `user-details-api` : `${getWebsiteDataUrl},user-details-api`;
var currentFileName = (typeof currentFileName == 'undefined') ? "" : currentFileName;


function loadWebsiteData(){

    ///FADE ELEMENTS TO SCREEN WHEN SCROLLING
    function scrollEventFunction(){
        let pageTop = $(document).scrollTop();
        let pageBottom = pageTop + $(window).height();
        let tags = $(".animate-elements");
        let nav = $("#website-top-navigation")[0];
        let allFoodCategoryContent = document.querySelectorAll(".food-category-section .food-category-content");
        let allScrollTabSectionButtons = document.querySelectorAll(".website-top-navigation .scroll-tab-section .content-wrapper .button");
        let trendingCarouselWrapper = document.querySelector(".body-wrapper .trending-carousel-wrapper");
        trendingCarouselWrapper ? allFoodCategoryContent = [trendingCarouselWrapper , ...allFoodCategoryContent] : false;
        // let mainPlatform = $("#main-platform")[0];
        
        (nav != undefined) ? (pageTop == 0) ? nav.classList.remove('shadow') : nav.classList.add('shadow') : false;
        
        let visible_allFoodCategoryContent = [];
        pageTop += (window.innerWidth < 950) ? 120 : 150;
        for (let i = 0; i < allFoodCategoryContent.length; i++) {
            let foodCategoryContent = allFoodCategoryContent[i];
            let foodCategoryContent_top = $(foodCategoryContent).position().top;
            let foodCategoryContent_bottom = $(foodCategoryContent).position().top + foodCategoryContent.offsetHeight;
            if ( ((foodCategoryContent_top <= pageTop) && (foodCategoryContent_bottom >= pageBottom)) || ((foodCategoryContent_top >= pageTop) && (foodCategoryContent_bottom <= pageBottom)) ) {
                visible_allFoodCategoryContent.push(foodCategoryContent.dataset.categoryName);
                if (visible_allFoodCategoryContent.length == 1) {
                    for (let x = 0; x < allScrollTabSectionButtons.length; x++) {
                        const button = allScrollTabSectionButtons[x];
                        if (button.dataset.categoryName == foodCategoryContent.dataset.categoryName) {
                            button.classList.add("active");
                            WTN_obj.scrollTabSectionTabButtonToMiddle(button);
                        }else{
                            button.classList.remove("active");
                        }
                    }
                }
            } else {
                
            }
        }

        for (let i = 0; i < tags.length; i++) {
            let tag = tags[i];
            if ($(tag).position().top < pageBottom) {
                $(tag).addClass("visible");
            } else {
                $(tag).removeClass("visible");
            }
        }
    }
    scrollEventFunction();
    document.addEventListener("scroll",scrollEventFunction);
    
    ///ADD GOOGLE TRANSLATOR TO WEBSITE PAGE
    let googleScriptTag = document.createElement('script');
    googleScriptTag.setAttribute('src', "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
    (document.querySelector('.goog-te-gadget')) ? document.querySelector('.goog-te-gadget').remove() : false;
    (document.querySelector('script[src*="translate.google.com"]')) ? document.querySelector('script[src*="translate.google.com"]').remove() : false;
    document.body.appendChild(googleScriptTag);

    WTN_obj.updateToggleCartButton();
    WTN_obj.loadScrollTabSection_contentWrapper();
    
    showLoadingModal('hide');
}





//WTN = website-top-navigation
let WTN_obj = {
    container: document.querySelector("#website-top-navigation"),
    sideNavigationToggleButton: document.querySelector("#website-top-navigation #side-navigation-toggle-button"),
    toggleCartButton: document.querySelector("#website-top-navigation #toggle-cart-button"),
    toggleCartButton_numberOfItemsInCart: document.querySelector("#website-top-navigation #toggle-cart-button #number-of-items-in-cart"),
    toggleSearchButton: document.querySelector("#website-top-navigation #toggle-search-button"),
    searchFieldSection: document.querySelector("#website-top-navigation .search-field-section"),
    searchFieldSection_backButton: document.querySelector("#website-top-navigation .search-field-section .back-button"),
    searchFieldSection_searchField: document.querySelector("#website-top-navigation .search-field-section #search-field"),
    scrollTabSection: document.querySelector("#website-top-navigation .scroll-tab-section"),
    scrollTabSection_contentWrapper: document.querySelector("#website-top-navigation .scroll-tab-section .content-wrapper"),
    updateToggleCartButton: function(){
        let WTN_obj = this;
        (this.toggleCartButton_numberOfItemsInCart) ? this.toggleCartButton_numberOfItemsInCart.innerHTML = SCM_obj.returnQuantityInCart() : false;
        (this.toggleCartButton) ? this.toggleCartButton.style.animation="shake 0.5s linear 0s 2 reverse" : false;
        setTimeout(function(){
            (WTN_obj.toggleCartButton) ? WTN_obj.toggleCartButton.style.animation="none" : false;
        },600);
        navigator.vibrate(200);
    },
    toggleSearchFieldSection: function(action){
        if (!action) { return null }
        if (action == "show") {
            (this.searchFieldSection) ? this.searchFieldSection.classList.add("show") : false;
            (this.searchFieldSection_searchField) ? this.searchFieldSection_searchField.value = "" : false;
            setTimeout(() => {
                (this.searchFieldSection_searchField) ? this.searchFieldSection_searchField.focus() : false;
            }, 200);
        }else{
           (this.searchFieldSection) ? this.searchFieldSection.classList.remove("show") : false;
           SSS_obj.toggleContainer("hide");
        }
    },
    loadScrollTabSection_contentWrapper: function(){
        let scrollTabSection_contentWrapperString = ``;
        for (let x = 0; x < siteDetailsApi.dishCategory.length; x++) {
            const dishCategoryObj = siteDetailsApi.dishCategory[x];
            let filtered_allAvailableDishApi = allAvailableDishApi.filter( (obj) => (obj.category.includes(dishCategoryObj.categoryName)) );
            if (filtered_allAvailableDishApi.length > 0) {
                scrollTabSection_contentWrapperString += `
				<button class="button" data-category-name="${dishCategoryObj.categoryName}" onclick="page_obj.scrollPageToCategory('${dishCategoryObj.categoryName}')">${dishCategoryObj.categoryTitle}</button>
                `;
            }
        }
        scrollTabSection_contentWrapperString += `<span class="padding-element"></span>`;
        (this.scrollTabSection_contentWrapper) ? this.scrollTabSection_contentWrapper.innerHTML = scrollTabSection_contentWrapperString : false;
    },
    scrollTabSectionTabButtonToMiddle: function(button){
        const parentDiv = button.parentElement.parentElement;
        const parentWidth = parentDiv.clientWidth;
        const buttonOffsetLeft = button.offsetLeft;
        const buttonWidth = button.offsetWidth;
        const scrollTo = buttonOffsetLeft - (parentWidth/2) + (buttonWidth/2);
        parentDiv.scrollTo({
            left: scrollTo,
            behavior: "smooth"
        });
    },
}

//SN = side-navigation
let SN_obj = {
    container: document.querySelector("#side-navigation"),
    websiteSideNavigation: document.querySelector("#side-navigation"),
    toggleSideNavigation: function (action){
        if (action == null) {
            if(isSideNavigationOpen() == true){
                this.container.classList.remove("show");
                WTN_obj.sideNavigationToggleButton.classList.remove("show");
                document.body.style.overflow = "auto";
            }else{
                this.container.classList.add("show");
                WTN_obj.sideNavigationToggleButton.classList.add("show");
                document.body.style.overflow = "hidden";
            }
        }
        if (action == "show") {
            this.container.classList.add("show");
            WTN_obj.sideNavigationToggleButton.classList.add("show");
            document.body.style.overflow = "hidden";
        }
        if (action == "hide") {
            this.container.classList.remove("show");
            WTN_obj.sideNavigationToggleButton.classList.remove("show");
            document.body.style.overflow = "auto";
        }
    }
}

//SSS = search-suggestion-section
let SSS_obj = {
    container: document.querySelector("#search-suggestion-section"),
    data: document.querySelector("#search-suggestion-section #data"),
    isContainerVisible: function(action){
        if (this.container.className.includes("show")) {
            return true;
        }else{
            return false;
        }
    },
    toggleContainer: function(action){
        if (action == "show") {
            if(!this.isContainerVisible()){
                this.container.classList.add("show");
            }
        }else{
            this.container.classList.remove("show");
        }
    },
    returnDataContent: function(dishApi){
        let string = "";
        for (let x = 0; x < dishApi.length; x++) {
            const dishApi_obj = dishApi[x];
            string += `
            <button onclick="VDM_obj.toggleContainerDisplay('show' , 'allDishApi' , '${dishApi_obj.dishId}'); SSS_obj.toggleContainer('hide'); WTN_obj.toggleSearchFieldSection('hide')" class="content-wrapper">
				<div class="image-wrapper">
					<img src="${dishApi_obj.imageUrl}" alt="image" class="image">
				</div>
				<div class="text-wrapper">
					<p class="title">${dishApi_obj.dishName}</p>
				</div>
			</button>
            `;
        }
        if (string == "") { string = `<span class="not-found-text"><i class="fa fa-search icon"></i><span class="text">Not Found</span></span>`; }
        return string;
    },
    searchDishApi: function(searchString, dishApi){
        if (!searchString.trim()) return []; // Return empty array if query is empty

        const queryWords = searchString.toLowerCase().split(/\s+/); // Split input into words

        return dishApi
            .map(dish => {
                const name = dish.dishName.toLowerCase();
                let score = 0;

                if (name === searchString) score += 10; // High priority for exact match
                else if (name.startsWith(searchString)) score += 5; // Starts with query
                else if (name.includes(searchString)) score += 3; // Contains query

                // New: Score boost for multi-word partial matches
                const matches = queryWords.filter(word => name.includes(word)).length;
                score += matches; // Directly add the number of matches to the score
                return { ...dish, score };
            })
            .filter(dish => dish.score > 0) // Remove non-matching results
            .sort((a, b) => b.score - a.score); // Rank by score
    },
    updateData: function(searchString){
        let dishApi = this.searchDishApi(searchString , siteDetailsApi.allDishApi);
        this.data.innerHTML = this.returnDataContent(dishApi);
        this.toggleContainer("show");
    },
}

document.addEventListener("touchstart", function(e){
    if( (isElementClicked(e.target,SN_obj.container) == false) && (isElementClicked(e.target,WTN_obj.sideNavigationToggleButton) == false) && (isSideNavigationOpen() == true)){
        SN_obj.toggleSideNavigation();
    }
});

        
function isSideNavigationOpen(){
    return SN_obj.container.className.includes("show");
}

function isElementClicked(targetEl , element){
    do {
        if (targetEl == element){
            return true;
        }
        targetEl = targetEl.parentNode;
    } while (targetEl);
    return false;
}



// SCM = shopping-cart-modal
let SCM_obj = {
    container: document.querySelector("#shopping-cart-modal"),
    contentSection: document.querySelector("#shopping-cart-modal .content-section"),
    priceText: document.querySelector("#shopping-cart-modal .bottom-section .price-section #price-text"),
    closeButton: document.querySelector("#shopping-cart-modal .bottom-section .button-wrapper #close-button"),
    proceedButton: document.querySelector("#shopping-cart-modal .bottom-section .button-wrapper #proceed-button"),
    toggleModal: function(action){
        if (!action) { return null }
        if (action == "show") {
            page_obj.closeAllModals();
            showModals(this.container , "show");
            this.loadContentSection();
        }else{
            showModals(this.container , "hide");
        }
    },
    returnAllDishApiObj: function(param){
        let {action = null , val = null} = param;
        if (!action || !val) { return null }
        if (action == "dishId") {
            let allDishApi = siteDetailsApi.allDishApi.filter( (obj) => (obj.dishId == val) );
            if (allDishApi.length == 1) {
                return allDishApi[0];
            }else{
                return null;
            }
        }
    },
    returnPriceVariantsObj: function(param){
        let {arr = null , variantId = null} = param;
        if (!arr || !variantId) { return null }
        let priceVariants_obj = arr.filter( (obj) => (obj.variantId == variantId) );
        if (priceVariants_obj.length == 1) {
            return priceVariants_obj[0];
        }else{
            return null;
        }
    },
    returnCustomizationOptionsObj: function(param){
        let {arr = null , optionId = null} = param;
        if (!arr || !optionId) { return null }
        let customizationOptions_obj = arr.filter( (obj) => (obj.optionId == optionId) );
        if (customizationOptions_obj.length == 1) {
            return customizationOptions_obj[0];
        }else{
            return null;
        }
    },
    calculatePriceOfIndividualDishes: function(param){
        let {arr = null} = param;
        if (!arr) { return null }

        let totalPrice = 0;
        for (let x = 0; x < arr.length; x++) {
            const arr_obj = arr[x];
            let allDishApi_obj = this.returnAllDishApiObj({action: "dishId" , val: arr_obj.dishId});
            if (allDishApi_obj) {
                let priceVariants_obj = this.returnPriceVariantsObj({arr: allDishApi_obj.priceVariants , variantId: arr_obj.priceVariantId});
                let customizationOptions_obj = this.returnCustomizationOptionsObj({arr: allDishApi_obj.customizationOptions , optionId: arr_obj.customizationOptionId});
                let price = 0;
                if (priceVariants_obj) {
                    price += priceVariants_obj.price;
                }
                if (customizationOptions_obj) {
                    price += customizationOptions_obj.additionalPrice;
                }
                price *= arr_obj.quantity;
                totalPrice += price;
            }
        }
        return totalPrice;
    },
    returnContentSectionData: function(){
        let storedCartObj = this.retrieveCartStorage();
        let string = ``;
        let cartItemsTotalPrice = 0;
        for (let x = 0; x < storedCartObj.cartItems.length; x++) {
            const cartItems_obj = storedCartObj.cartItems[x];
            let totalPrice = this.calculatePriceOfIndividualDishes({arr: cartItems_obj.individualDishes});
            cartItemsTotalPrice += totalPrice * cartItems_obj.quantity;
            string += `
            <div class="dish-wrapper">
                <div class="image-wrapper">
                    <img src="${cartItems_obj.imageUrl}" alt="image" class="image">
                </div>
                <div class="right-section">
                    <div class="text-wrapper">
                        <p class="title">${cartItems_obj.dishName}</p>
                        <p class="price">&#8358;${totalPrice}</p>
                    </div>
                    <div class="button-wrapper">
                        <div class="toggle-quantity-wrapper" id="toggle-quantity-wrapper" >
                            <button class="button minus" onclick="SCM_obj.changeItemQuantity(this , '${cartItems_obj.dishId}' , 'minus')"><i class="fa fa-minus" ></i></button>
                            <span class="text-field">${cartItems_obj.quantity}</span>
                            <button class="button plus" onclick="SCM_obj.changeItemQuantity(this , '${cartItems_obj.dishId}' , 'plus')"><i class="fa fa-plus" ></i></button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        if ( storedCartObj.totalItems == 0 ) {
            string = `<span class="not-found-text"><span class="text">EMPTY</span><span class="icon"><i class="fa fa-shopping-cart"></i></span></span>`;
            this.proceedButton.classList.add("hide");
        }else{
            this.proceedButton.classList.remove("hide");
        }
        return {dataString: string, cartItemsTotalPrice: cartItemsTotalPrice};
    },
    loadContentSection: function(){
        let returnContentSectionData = this.returnContentSectionData();
        this.contentSection.innerHTML = returnContentSectionData.dataString;
        this.priceText.innerHTML = `&#8358;${returnContentSectionData.cartItemsTotalPrice}`;
    },
    changeItemQuantity: function(button , dishId , mode){
        if (!button || !dishId || !mode){ return null}
        let textField = button.parentElement.querySelector(".text-field");
        if (!textField){ return null}
        let textFieldVal = textField.textContent;
        if(mode == "plus"){
            textField.textContent = (textFieldVal*1) + 1;
        }
        if(mode == "minus"){
            textField.textContent = ( textFieldVal <= 0 ) ? 0 : (textFieldVal*1) - 1;
        }
        this.userChangedItemQuantity(button , dishId , mode);
    },
    userChangedItemQuantity: function(button , dishId , mode){
        if (!button || !dishId || !mode){ return null}
        let textField = button.parentElement.querySelector(".text-field");
        if (!textField){ return null}
        let textFieldVal = textField.textContent;
        let storedCartObj = this.retrieveCartStorage();
        let cartItems = storedCartObj.cartItems.filter( (obj) => (obj.dishId == dishId) );
        if (cartItems.length == 1) {
            let cartItems_obj = cartItems[0];
            SCM_obj.updateCart(
                {
                    dishObj: cartItems_obj,
                    quantity: textFieldVal*1,
                }
            );
        }
        this.loadContentSection();
        loadFoodCategorySection();
    },
    createCartStorage: function(){
        let storedCartObj = {
            cartItems: [],
            totalItems: 0,
        };
        localStorage.setItem("cart" , JSON.stringify(storedCartObj));
        return storedCartObj;
    },
    retrieveCartStorage: function(){
        let storedCartObj = localStorage.getItem("cart");
        if (storedCartObj == null) {
            return this.createCartStorage();
        }else{
            return JSON.parse(storedCartObj);
        }
    },
    returnQuantityInCart: function(storedCartObj){
        if (!storedCartObj) {
            storedCartObj = this.retrieveCartStorage();
        }
        let quantity = 0;
        for (let x = 0; x < storedCartObj.cartItems.length; x++) {
            const cartItems_obj = storedCartObj.cartItems[x];
            quantity += cartItems_obj.quantity*1;
        }
        console.log(quantity);
        return quantity;
    },
    updateCart: function(param){
        let storedCartObj = this.retrieveCartStorage();
        let existingItemIndex = storedCartObj.cartItems.findIndex(obj => obj.dishId === param.dishObj.dishId);
        if (existingItemIndex > -1) {
            if (param.quantity <= 0) {
                storedCartObj.cartItems.splice(existingItemIndex, 1);
            }else{
                storedCartObj.cartItems[existingItemIndex].quantity = param.quantity;
            }
        }else{
            if (param.quantity > 0) {
                let newItem = {
                    ...param.dishObj,
                    "quantity": param.quantity,
                };
                storedCartObj.cartItems.push(newItem);
            }
        }
        storedCartObj.totalItems = this.returnQuantityInCart(storedCartObj);
        localStorage.setItem("cart" , JSON.stringify(storedCartObj));
        WTN_obj.updateToggleCartButton();
    },
    userProceed: function(){
        SM_obj.toggleModal("show");
    },
};



// OHM = order-history-modal
let OHM_obj = {
    container: document.querySelector("#order-history-modal"),
    contentSection: document.querySelector("#order-history-modal .content-section"),
    toggleModal: function(action){
        if (!action) { return null }
        if (action == "show") {
            page_obj.closeAllModals();
            this.loadModal();
            showModals(this.container , "show");
        }else{
            showModals(this.container , "hide");
        }
    },
    returnContentSectionData:function(){
        let orderStorage = this.retrieveOrderStorage();
        let string = '';
        for (let x = 0; x < orderStorage.length; x++) {
            const orderStorage_obj = orderStorage[x];
            
            let createdDateTextDistanceObj = this.getDistanceFromDateStringTillNow(orderStorage_obj.createdDate);
            let createdDateText;
            if(createdDateTextDistanceObj.distanceInMilliseconds < 604800000){  // 7 days
                createdDateText = `${createdDateTextDistanceObj.distanceInText} ago`;
            }else {
                createdDateText = orderStorage_obj.createdDate;
            }
            string += `
            <div class="card-wrapper">
                <span class="left-icon"><i class="fa fa-history"></i></span>
                <div class="text-wrapper">
                    <span class="title">${orderStorage_obj.orderId}</span>
                    <span class="address">${orderStorage_obj.streetAddress}</span>
                    <span class="date">${createdDateText}</span>
                    <span class="status">${returnStatusHtmlText(orderStorage_obj.status)}</span>
                </div>
                <div class="button-wrapper">
                    <button class="button" id="remove-button" onclick="OHM_obj.removeObjFromOrderStorage({orderId: '${orderStorage_obj.orderId}'})"><i class="fa fa-trash-alt icon"></i></button>
                </div>
            </div>
            `;
        }
        if (orderStorage.length == 0) {
            string = `
            <span class="not-found-text">
                <span class="text">EMPTY</span>
                <span class="icon"><i class="fa fa-history"></i></span>
            </span>
            `;
        }
        return string;
    },
    loadModal: function(){
        this.contentSection.innerHTML = this.returnContentSectionData();
    },
    generateOrderId: function(){
        return Math.floor(10000 + Math.random() * 90000);
    },
    getDistanceFromDateStringTillNow: function(dateString){
        let oldDate = new Date(dateString.replace(" " , "T"));
        let currentDate = new Date();
        let distance = currentDate.getTime() - oldDate.getTime();
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
    },
    returnAllDishApiObj: function(param){
        let {action = null , val = null} = param;
        if (!action || !val) { return null }
        if (action == "dishId") {
            let allDishApi = siteDetailsApi.allDishApi.filter( (obj) => (obj.dishId == val) );
            if (allDishApi.length == 1) {
                return allDishApi[0];
            }else{
                return null;
            }
        }
    },
    returnPriceVariantsObj: function(param){
        let {arr = null , variantId = null} = param;
        if (!arr || !variantId) { return null }
        let priceVariants_obj = arr.filter( (obj) => (obj.variantId == variantId) );
        if (priceVariants_obj.length == 1) {
            return priceVariants_obj[0];
        }else{
            return null;
        }
    },
    returnCustomizationOptionsObj: function(param){
        let {arr = null , optionId = null} = param;
        if (!arr || !optionId) { return null }
        let customizationOptions_obj = arr.filter( (obj) => (obj.optionId == optionId) );
        if (customizationOptions_obj.length == 1) {
            return customizationOptions_obj[0];
        }else{
            return null;
        }
    },
    calculatePriceOfIndividualDishes: function(param){
        let {arr = null} = param;
        if (!arr) { return null }

        let totalPrice = 0;
        for (let x = 0; x < arr.length; x++) {
            const arr_obj = arr[x];
            let allDishApi_obj = this.returnAllDishApiObj({action: "dishId" , val: arr_obj.dishId});
            if (allDishApi_obj) {
                let priceVariants_obj = this.returnPriceVariantsObj({arr: allDishApi_obj.priceVariants , variantId: arr_obj.priceVariantId});
                let customizationOptions_obj = this.returnCustomizationOptionsObj({arr: allDishApi_obj.customizationOptions , optionId: arr_obj.customizationOptionId});
                let price = 0;
                if (priceVariants_obj) {
                    price += priceVariants_obj.price;
                }
                if (customizationOptions_obj) {
                    price += customizationOptions_obj.additionalPrice;
                }
                price *= arr_obj.quantity;
                totalPrice += price;
            }
        }
        return totalPrice;
    },
    calculatePriceOfCartItemsArr: function(cartItemsArr){
        let cartItemsTotalPrice = 0;
        for (let x = 0; x < cartItemsArr.length; x++) {
            const cartItems_obj = cartItemsArr[x];
            let totalPrice = this.calculatePriceOfIndividualDishes({arr: cartItems_obj.individualDishes});
            cartItemsTotalPrice += totalPrice * cartItems_obj.quantity;
        }
        return cartItemsTotalPrice;
    },
    updateCartItemsArrProperties: function(cartItemsArr){
        cartItemsArr = JSON.parse(JSON.stringify(cartItemsArr));
        for (let x = 0; x < cartItemsArr.length; x++) {
            const cartItems_obj = cartItemsArr[x];
            for (let y = 0; y < cartItems_obj.individualDishes.length; y++) {
                const individualDishes_obj = cartItems_obj.individualDishes[y];
                let allDishApi_obj = this.returnAllDishApiObj({action: "dishId" , val: individualDishes_obj.dishId});
                if (allDishApi_obj) {
                    let priceVariants_obj = this.returnPriceVariantsObj({arr: allDishApi_obj.priceVariants , variantId: individualDishes_obj.priceVariantId})
                    let customizationOptions_obj = this.returnCustomizationOptionsObj({arr: allDishApi_obj.customizationOptions , optionId: individualDishes_obj.customizationOptionId});
                    if (priceVariants_obj && customizationOptions_obj) {
                        allDishApi_obj = JSON.parse(JSON.stringify(allDishApi_obj));
                        priceVariants_obj = JSON.parse(JSON.stringify(priceVariants_obj));
                        customizationOptions_obj = JSON.parse(JSON.stringify(customizationOptions_obj));
                        cartItemsArr[x].individualDishes[y].dishObj = allDishApi_obj;
                        cartItemsArr[x].individualDishes[y].priceVariantObj = priceVariants_obj;
                        cartItemsArr[x].individualDishes[y].customizationOptionObj = customizationOptions_obj;
                    }
                }
            }
        }
        return cartItemsArr;
    },
    createOrderStorage: function(){
        let storedOrderArr = [];
        localStorage.setItem("orders" , JSON.stringify(storedOrderArr));
        return storedOrderArr;
    },
    retrieveOrderStorage: function(){
        let storedOrderArr = localStorage.getItem("orders");
        if (!storedOrderArr) {
            return this.createOrderStorage();
        }else{
            return JSON.parse(storedOrderArr);
        }
    },
    addObjToOrderStorage: function(param){
        let {
            cartItemsArr = null ,
            firstName = null,
            lastName = null,
            phoneNumber = null,
            streetAddress = null,
            city = null,
            state = null,
            extraDescription = null,
        } = param;
        if (!cartItemsArr || !firstName || !lastName || !phoneNumber || !streetAddress || !city || !state || !extraDescription) { return null }
        
        let OHM_obj = this; 
        let priceOfTotalCart = this.calculatePriceOfCartItemsArr(cartItemsArr);
        cartItemsArr = this.updateCartItemsArrProperties(cartItemsArr);
        let currentDate = new Date();
        let currentDateString = formatDateToDateFormat(currentDate);
        let orderObj = {
            orderId: OHM_obj.generateOrderId(),
            cartItems: cartItemsArr,
            priceOfTotalCart: priceOfTotalCart,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            streetAddress: streetAddress,
            city: city,
            state: state,
            extraDescription: extraDescription,
            paymentMethod: "pay-on-delivery",
            status: "pending",
            createdDate: currentDateString,
        }
        let orderStorage =  this.retrieveOrderStorage();
        orderStorage.unshift(orderObj);
        localStorage.setItem("orders" , JSON.stringify(orderStorage));
        return true;
    },
    removeObjFromOrderStorage: function(param){
        console.log(param);
        let { orderId = null } = param;
        if (!orderId) { return null }
        let orderStorage =  this.retrieveOrderStorage();
        let existingItemIndex = orderStorage.findIndex(obj => obj.orderId == orderId);
        if (existingItemIndex > -1) {
            orderStorage.splice(existingItemIndex, 1);
            localStorage.setItem("orders" , JSON.stringify(orderStorage));
            this.loadModal();
        }
    },
}



// POM = party-order-modal
let POM_obj = {
    container: document.querySelector("#party-order-modal"),
    toggleModal: function(action){
        if (!action) { return null }
        if (action == "show") {
            page_obj.closeAllModals();
            showModals(this.container , "show");
        }else{
            showModals(this.container , "hide");
        }
    },
}



// CUM = contact-us-modal
let CUM_obj = {
    container: document.querySelector("#contact-us-modal"),
    toggleModal: function(action){
        if (!action) { return null }
        if (action == "show") {
            page_obj.closeAllModals();
            showModals(this.container , "show");
        }else{
            showModals(this.container , "hide");
        }
    },
}



// ATCM = about-the-creator-modal
let ATCM_obj = {
    container: document.querySelector("#about-the-creator-modal"),
    toggleModal: function(action){
        if (!action) { return null }
        if (action == "show") {
            page_obj.closeAllModals();
            showModals(this.container , "show");
        }else{
            showModals(this.container , "hide");
        }
    },
}