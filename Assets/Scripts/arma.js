#pragma strict
var guiArma:Texture;
var posiX2: float;
var posiY2: float;

var altura2: float;
var largura2: float;
var projetil:GameObject;
var testStyle:GUIStyle;

     function Start(){
     
    altura2  = 30;
	largura2 = 30;

	posiX2 = Screen.width/2 - largura2/2 + 60; 
	posiY2 = Screen.height/2- altura2 /2 + 90;
	
	}

	function OnGUI () {
	
	GUI.contentColor = Color.black;
		
	if(GUI.Button(Rect(posiX2,posiY2,largura2,altura2),guiArma,testStyle)){
		Instantiate (projetil, transform.position, transform.rotation);
        audio.Play();
	}
}
     				
            		
     		
     	  