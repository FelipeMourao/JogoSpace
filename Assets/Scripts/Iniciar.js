#pragma strict
public var High:TextMesh;
var posiX2: float;
var posiY2: float;

var altura2: float;
var largura2: float;

function Start () {
High.text = PlayerPrefs.GetInt("HighScore").ToString();
altura2  = 50;
largura2 = 70;

posiX2 = Screen.width/2 - largura2/2; 
posiY2 = Screen.height/2- altura2 /2 + 40;
}

function OnGUI () {
	GUI.contentColor = Color.black;
		
	if(GUI.Button(Rect(posiX2,posiY2,largura2,altura2),"Inicia")){
		Application.LoadLevel("Space");
	}
}