#pragma strict
var guiLeft:GUITexture;
var guiRight:GUITexture;
var guiUp:GUITexture;
var guiDown:GUITexture;
var jato:GameObject;

var moveSpeed:float = 25f;

var moveLeft:boolean = false;
var moveRight:boolean = false;
var moveUp:boolean = false;
var moveDown:boolean = false;
var moveleft:GameObject;
var t:Touch;


function Update () {


	 if(Input.GetKeyUp("up")){				
				print("a funçao deu certo");
				
				 }
	
	if(Input.touchCount > 0){
		t = Input.GetTouch(0);
		
		if(t.phase == TouchPhase.Began){
			if(guiLeft.HitTest(t.position, Camera.main)){
				Debug.Log("Touching Left Control");
				moveLeft = true;			
			}
			if(guiRight.HitTest(t.position, Camera.main)){
				Debug.Log("Touching Right Control");
				moveRight = true;			
			}
			if(guiUp.HitTest(t.position, Camera.main)){
				Debug.Log("Touching Up Control");
				moveUp = true;			
			}
			if(guiDown.HitTest(t.position, Camera.main)){
				Debug.Log("Touching Down Control");
				moveDown = true;			
			}
		}
		 if (t.phase == TouchPhase.Ended)
            {
                moveUp = moveDown = moveLeft = moveRight = false;
                rigidbody2D.velocity = Vector2.zero;
            }
        
		}
		
		
	}
		


function FixedUpdate()
    {
    
        // Set velocity based on our movement flags.
        if (moveLeft)
        {
            rigidbody2D.velocity = -Vector2.right * moveSpeed;
        }
 
        if (moveRight)
        {
            rigidbody2D.velocity = Vector2.right * moveSpeed;
        }
        if (moveUp)
        {
            rigidbody2D.velocity = Vector2.up * moveSpeed;
        }
        if (moveDown)
        {
            rigidbody2D.velocity = -Vector2.up * moveSpeed;
        }
    }