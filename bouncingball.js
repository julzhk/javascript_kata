// A child plays with a ball on the nth floor of a big building.
// His mother looks out of a window that is 1.5 meters from the ground:
// How many times will the mother see the ball either falling or bouncing in front of the window

// You will see: a ball can only be seen if the height of the rebouncing ball than the window.
// Example:
// h = 3, bounce = 0.66, window = 1.5, result is 3
// h = 3, bounce = 1, window = 1.5, result is -1


function bouncingBall(h,  bounce,  window, count=0) {
  console.log('enter with h',h, ' ',window, ' ',count)
  if (h>window)){
  	count +=1
  }
  if (h<window){
    return count
  }
  newheight = h*bounce
  if (newheight>window){
    count +=1
  }
  return bouncingBall(newheight,bounce,window,count)
}





console.log(bouncingBall(3,0.66, 1.5))