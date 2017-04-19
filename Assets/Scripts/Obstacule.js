#pragma strict
static var velocidadeobstacule: float;
function Start () {

}

function Update () {
	velocidadeobstacule = 2.5*Time.deltaTime;
	transform.Translate(-velocidadeobstacule,0,0);
	
	if(Move.pontuacao >= 100){
		transform.Translate(-1.5*velocidadeobstacule,0,0);
	}
	if(Move.pontuacao >= 200 ){
   		transform.Translate(-1.8*velocidadeobstacule,0,0);
     }
     if(Move.pontuacao >= 300 ){
   		transform.Translate(-2*velocidadeobstacule,0,0);
     }
     if(Move.pontuacao >= 400 ){
   		transform.Translate(-2.2*velocidadeobstacule,0,0);
     }
     
}