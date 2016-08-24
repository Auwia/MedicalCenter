/**
 * Massimo Manganiello 19/08/2016
 */

var app = angular.module('myApp', []);
app
		.controller(
				'checkFiscalCode',
				function($scope) {
					$scope.controllaCF = function() {
						// Definisco un pattern per il confronto
						var pattern = /^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$/;

						// creo una variabile per richiamare con facilità il
						// nostro campo di input
						var CodiceFiscale = document.getElementById("cf");

						// utilizzo il metodo search per verificare che il
						// valore inserito nel campo
						// di input rispetti la stringa di verifica (pattern)
						if (CodiceFiscale.value.search(pattern) == -1) {
							// In caso di errore stampo un avviso e pulisco il
							// campo...
							$scope.cfErrorLabel = "Il valore inserito non è un codice fiscale!";
							CodiceFiscale.focus();
						} else {
							// ...in caso contrario stampo un avviso di
							// successo!
							$scope.cfErrorLabel = "Il codice fiscale è corretto!";
						}
					}
				});

function saveAnagrafica() {

	$http.post("http://medicalcloud.altervista.org/insert_anagrafica.php", {
		'cf' : $scope.newFriend.fname,
		'lstname' : $scope.newFriend.lname
	}).success(function(data, status, headers, config) {
		console.log("inserted Successfully");
	});

}
