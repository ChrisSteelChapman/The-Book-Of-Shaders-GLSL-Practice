//Example 2 from The Book Of Shaders.
//Uniforms

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;  // Canvas Size (width, height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load

//Increases and decreases red value over time according to a sin curve.
//Changing the value of the second parameter of pow() speeds up or slows change.
//Changes too fast to be seen a little bit after 12.0.

//Hangup: if you're going to do simple float multiplication, MAKE SURE you add
//the floating point to any raw number. Otherwise, it's interpreted as an int,
//and you won't be able to multiply.
void main(){
  gl_FragColor = vec4(abs(sin(pow(u_time, 2.0))),0.0,0.0,1.0);
}

//GLSL has hardware accelerated angle, trig, and exponential functions.
// sin(), cos(), tan(), asin(), acos(), atan(), pow(), exp(), log()
// sqrt(), abs(), sign(), floor(), ceil(), fract(), mod(), min(), max()
// and, EXTREMELY USEFUL, clamp().
