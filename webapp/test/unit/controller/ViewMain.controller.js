/*global QUnit*/

sap.ui.define([
	"com/jp/ui5-node/controller/ViewMain.controller"
], function (oController) {
	"use strict";

	QUnit.module("ViewMain Controller");

	QUnit.test("I should test the ViewMain controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});