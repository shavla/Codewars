var Ball = function(ballType) {
 if (typeof ballType === "string"){
    this.ballType=ballType; 
  } else this.ballType="regular";
};
