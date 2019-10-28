		var popupMap = document.querySelector(".modal-map");
		var close= popupMap.querySelector(".modal-close");
		var linkSearchUs = document.querySelector(".search-us");

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