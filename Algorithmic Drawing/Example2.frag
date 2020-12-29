//Example 2 from The Book Of Shaders chapter Algorithmic Drawing.
//Step

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

//step() receives two parameters. The first is the limit, and the second
//is the value we want to check or pass.
//If it's below the limit, return 0.0.
//If it's above, return 1.0.

float plot(vec2 st, float pct){
  return smoothstep(pct-0.02, pct, st.y) -
         smoothstep(pct, pct+0.02, st.y);
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;

  // Step will return 0.0 unless the value is over 0.5
  // Else return 1.0
  float y = step(0.5, st.x);

  vec3 color = vec3(y);

  float pct = plot(st.y);
  color = (1.0 - pct)*color+pct*vec3(0.0,1.0,0.0);

  gl_FragColor = vec4(color,1.0);
}
