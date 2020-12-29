//Example 3 from The Book Of Shaders
//gl_FragCoord
//main's value changes with the screen position of the mouse
//and pulses according to a sin value.
//Pulses faster as x and y increase.

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

//gl_FragCoord is NOT uniform. It refers to the specific pixel being shaded, so
//it's different from thread to thread. For this reason, it is called
//a varying.
void main(){
  //vec2 st = gl_FragCoord.xy/u_resolution; //Normalizes gl_FragCoord
  vec2 st = abs(sin(u_time) * u_mouse/u_resolution;
  gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
}
