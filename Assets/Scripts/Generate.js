#pragma strict
var target : GameObject;
public var  velocidadeObstacule = new Vector2(-4.0f,0.0f);
var parte2:AudioClip;
var parte3:AudioClip;
var parte4:AudioClip;


function Start()
{
    InvokeRepeating("SpawnObject", 2, 1);
    rigidbody2D.velocity = velocidadeObstacule;
}

function Update() {
	 if(Move.pontuacao == 100){
   		if(!audio.isPlaying){
   			audio.Play();
   		}
     }
     
     if(Move.pontuacao == 200){
   		if(!audio.isPlaying){
   			audio.clip = parte2;
   			audio.Play();
   		}
     }
     if(Move.pontuacao == 300 ){
   		if(!audio.isPlaying){
   			audio.clip = parte3;
   			audio.Play();
   		}
     }
     if(Move.pontuacao == 400){
   		if(!audio.isPlaying){
   			audio.clip = parte4;
   			audio.Play();
   		}
     }
     
     if(Move.pontuacao >= 500 && Move.pontuacao % 100 == 0){
     	if(!audio.isPlaying){
   			audio.clip = parte4;
   			audio.Play();
   		}
     }
}

function SpawnObject()
{
	var x : float = Random.Range(10.0f,9.0f);
	var y : float = Random.Range(4.0f,-4.0f);
    Instantiate(target,new Vector2(x,y),transform.rotation);
    
}

