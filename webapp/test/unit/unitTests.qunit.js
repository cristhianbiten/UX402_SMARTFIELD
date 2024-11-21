/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student10comsaptrainingux402smartfield/ux402_smartfield/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
