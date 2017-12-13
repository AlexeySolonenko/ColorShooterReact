export const moveBall = (ballPos) => {  
    let newPos = ballPos;
    newPos.id++;
    newPos.id>3 && (newPos.id=0);
    (newPos.id===0)&&(newPos.name="topLeft");
    (newPos.id===1)&&(newPos.name="topRight");
    (newPos.id===2)&&(newPos.name="bottomRight");
    (newPos.id===3)&&(newPos.name="bottomLeft");
    return newPos;
}