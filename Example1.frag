//Example 1 from The Book Of Shaders
//Returns a delightful beige color.

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
//Calling red() in main will change the value to red.
void red(){
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
//Different way to create a Vec4.
void blue() {
  gl_FragColor = vec4(vec3(0.0, 0.0, 1.0),1.0);
}
//gl_FragColor's vec4 arguments correspond to RGBA and are normalized.
//ALWAYS put the floating point in. Sometimes it will work without it.
//What's more important is that sometimes, it won't.
void main() {
  gl_FragColor = vec4(0.7, 0.55, 0.45, 1.0);
}

//Notes: GLSL seems to have vectors, floats, ints, and bools built in.
//Looks mostly like C.
