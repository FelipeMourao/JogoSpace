#pragma strict

function OnCollisionEnter2D (col:Collision2D)
{
	if(col.gameObject.tag == "Nave")
	{
		Application.LoadLevel("Game Over");
	}
}