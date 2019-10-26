		var linkMap = document.querySelector(".js-button-map");
		var popupMap = document.querySelector(".modal-map");
		var close= popupMap.querySelector(".modal-close");
		var linkSearchUs = document.querySelector(".search-us");

		linkMap.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.offsetWidth = popup.offsetWidth;
			popupMap.classList.add("modal-show");
		});

		close.addEventListener("click", function (evt) {
			evt.preventDefault();
			popupMap.classList.remove("modal-show");
		});

		window.addEventListener("keydown", function (evt) {
			if (evt.keyCode === 27) {
				evt.preventDefault();

				if (popupMap.classList.contains("modal-show")) {
					popupMap.classList.remove("modal-show");
				}
			}
		})

		linkSearchUs.addEventListener("click", function(evt) {
			evt.preventDefault();
			popupMap.classList.add("modal-show");
		});