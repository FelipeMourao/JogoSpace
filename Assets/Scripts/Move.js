#pragma strict
static var pontuacao: int;
var Pontuacao:GUIText;
var HighScore:GUIText;

function Start () {
	pontuacao = 0;
	PlayerPrefs.GetInt ("HighScore",pontuacao);  
}

function Update () {
	Pontuacao.text = "Score:" + pontuacao.ToString();
	if(pontuacao > PlayerPrefs.GetInt ("HighScore")){
		PlayerPrefs.SetInt ("HighScore",pontuacao);
	}
	
	if( PlayerPrefs.GetInt ("HighScore") != null){
		HighScore.text ="HighScore:"  + PlayerPrefs.GetInt ("HighScore",pontuacao).ToString();
		
	}
	
	
				
		var distanceZ = (transform.position - Camera.main.transform.position).z;
		
		var leftBorder = Camera.main.ViewportToWorldPoint (new Vector3 (0, 0, distanceZ)).x;

		var topBorder = Camera.main.ViewportToWorldPoint (new Vector3 (0, 0, distanceZ)).y;

		var bottomBorder = Camera.main.ViewportToWorldPoint (new Vector3 (0, 1, distanceZ)).y;

		transform.position = new Vector3 (
			Mathf.Clamp (transform.position.x, leftBorder, transform.position.z),
			Mathf.Clamp (transform.position.y, topBorder, bottomBorder),
			transform.position.z
		);		
}