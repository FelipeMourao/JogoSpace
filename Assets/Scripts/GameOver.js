#pragma strict

var posiX: float;
var posiY: float;

var altura: float;
var largura: float;

public var recorde:TextMesh;
var Pontuacao2:GUIText;
static var pontuacao2:int;

function Start () {
recorde.text = PlayerPrefs.GetInt("HighScore").ToString();

altura  = 50;
largura = 70;

posiX = Screen.width/2 - largura/2; 
posiY = Screen.height/2- altura /2 + 90;
}

function Update () {
	
	Pontuacao2.text = "Score:" + Move.pontuacao.ToString();
	if(pontuacao2 > PlayerPrefs.GetInt ("HighScore")){
		PlayerPrefs.SetInt ("HighScore",pontuacao2);
	}
}

function OnGUI () {
	GUI.contentColor = Color.black;
		
	if(GUI.Button(Rect(posiX - 90,posiY,largura,altura),"Retry?")){
		Application.LoadLevel("Space");
	}
	if(GUI.Button(Rect(posiX + 90,posiY,largura,altura),"Quit")){
		Application.Quit();
	}
}