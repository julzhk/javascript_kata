// A child plays with a ball on the nth floor of a big building.
// His mother looks out of a window that is 1.5 meters from the ground:
// How many times will the mother see the ball either falling or bouncing in front of the window

// You will see: a ball can only be seen if the height of the rebouncing ball than the window.
// Example:
// h = 3, bounce = 0.66, window = 1.5, result is 3
// h = 3, bounce = 1, window = 1.5, result is -1


function bouncingBall(h,  bounce, window, count=0) {
//   if args out of bounds, return error signal
  if ((h==window && count==0) || (h<=0) || (count>600) || (bounce>=1)){
    return -1
  }
//   first drop passes the window once..
  if ((h>window) && (count == 0)){
  	count =1
  }
//   bounce is lower than the window, so return the number of bounces
  if (h<=window){
    return count
  }
//   bounce to a height of h * bounce 
  newheight = h*bounce
  if (newheight>window){
    count +=2
  }
  return bouncingBall(newheight,bounce,window,count)
}






console.log(bouncingBall(3,0.66, 1.5))