#pragma strict
var velocidadeBala: float;

function Start () {
	
}

function Update () {

velocidadeBala = 10*Time.deltaTime;
transform.Translate(velocidadeBala,0,0);
	
}
