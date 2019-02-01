/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/jp/ui5-node/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});