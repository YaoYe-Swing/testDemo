function shopControl() {
	function doorAction(left, right, time) {
		var $door = $('.door');
		var doorLeft = $('.door_left');
		var doorRight = $('.door_right');
		var defer = $.Deferred();
		var count = 2;
		// 等待开门完成
		var complete = function() {
			if (count == 1) {
				defer.resolve();
				return defer;
			}
			count--;
		}
		doorLeft.transition({
			'left': left
		}, time, complete);
		doorRight.transition({
			'left': right
		}, time, complete);
		return defer;
	}

	var openDoor = function() {
		doorAction('-50%', '100%', 2000);
	}
	var shutDoor = function() {
		doorAction('0%', '50%', 2000);
	}
	var bright = function() {
		var lamp = $("#b_main").removeClass("b_background").addClass("lamp-bright");
	}
	var dark = function() {
		var lamp = $("#b_main").removeClass("lamp-bright").addClass("b_background");
	}

	return {
		doorOpen: function() {
			openDoor();
		},
		doorShut: function() {
			shutDoor();
		},
		lampBright: function() {
			bright();
		},
		lampDark: function() {
			dark();
		}
	}
}