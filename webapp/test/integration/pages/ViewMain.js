sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "ViewMain";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "idAppControl",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The ViewMain view is displayed");
						},
						errorMessage: "Did not find the ViewMain view"
					});
				}
			}
		}
	});

});