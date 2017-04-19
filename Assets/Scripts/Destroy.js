#pragma strict

function OnCollisionEnter2D (col:Collision2D)
{
	if(col.gameObject.tag == "Inimiga")
	{
		Destroy(col.gameObject);
		Destroy(gameObject);	
		Move.pontuacao = Move.pontuacao + 10;
		
		
	}
	
}

