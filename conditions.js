window.addEventListener("load", addListener);
function addListener() {
    document.getElementById('ageID').addEventListener('change', valideAge);
    document.getElementById('idIden').addEventListener('change', valideID);
    document.getElementById('mdp1I').addEventListener('change', valideMDP);
    document.getElementById('mdp2I').addEventListener('change', valideMemeMDP);
    document.getElementById('cdtID').addEventListener('change', valideConditions);
}
verifAge=false;
verifID=false;
verifCdt=false;
verifMDP=false;
verifMemeMDP=false;
function valideAge() {
    var age = document.getElementById('ageID').value;
    Number(age);
    if (age === "") {
        document.getElementById('erreurAge').style.visibility = 'hidden';
    } else {
        if (age >= 18) {
            verifAge = true;
            document.getElementById('erreurAge').style.visibility = 'hidden';
        } else {
            verifAge = false;
            document.getElementById('erreurAge').style.visibility = 'visible';
        }
    }
    validationFormulaire();
}

function valideID(){
	var id = document.getElementById('idIden').value;
	var reg= new RegExp("[a-z]{1,12}");
	if(reg.test(id)) {
		verifID = true;
        document.getElementById('erreurIden').style.visibility = 'hidden';
	}
	else {
		verifID = false;
        document.getElementById('erreurIden').style.visibility = 'visible';
	}
}

function valideMDP() {
    var mdp1 = document.getElementById('mdp1I').value;
    var pourcentage = 0;
    var min = false;
    var maj = false;
    var chif = false;
    var carac = false;
    if (mdp1.length > 8) {
        pourcentage = pourcentage + 20;
    }
    for (i = 0; i < mdp1.length; i++) {
        if (/[a-z]/.test(mdp1.charAt(i))) {
            min = true;
        }

        if (/[A-Z]/.test(mdp1.charAt(i))) {
            maj = true;
        }

        if (/[0-9]/.test(mdp1.charAt(i))) {
            chif = true;
        }

        if (/[^a-zA-Z0-9]/.test(mdp1.charAt(i))) {
            carac = true;
        }
    }
    if (min)
        pourcentage = pourcentage + 20;
    if (maj)
        pourcentage = pourcentage + 20;
    if (chif)
        pourcentage = pourcentage + 20;
    if (carac)
        pourcentage = pourcentage + 20;
    document.getElementById('forceMDP').innerHTML = pourcentage + "%";

    if (pourcentage >= 60) {
        verifMDP = true;
    } else {
        verifMDP = false;
    }
}

function valideMemeMDP() {
    var mdp1 = document.getElementById('mdp1I').value;
    var mdp2 = document.getElementById('mdp2I').value;

    if (mdp1 === mdp2) {
        verifMemeMDP = true;
        document.getElementById('erreurMDP2').style.visibility = 'hidden';
    } else {
        verifMemeMDP = false;
        document.getElementById('erreurMDP2').style.visibility = 'visible';
    }
    validationFormulaire();
}

function valideConditions() {
    if(document.getElementById('cdtID').checked == true) {
        verifCdt = true;
    } 
	else {
        verifCdt = false;
    }
    validationFormulaire();
}

function validationFormulaire() {
    if (verifAge && verifMemeMDP) {
        document.getElementById('boutonOk').disabled = false;
    } else {
        document.getElementById('boutonOk').disabled = true;
    }
}

function validation() {
	alert("Inscription validée");
}
