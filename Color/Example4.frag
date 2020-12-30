//Example 4 for The Book Of Shaders chapter Color
//HSB in Polar Coordinates

//HSB was designed to be represented in polar coordinates, so bust
//out that funky sphere math.

//Note: functions to take note of:
//distance(), dot(), cross(), normalize(), faceforward(), reflect(),
//refract(), lessThan(), lessThanEqual(), greaterThan(), greaterThanEqual(),
//equal(), and notEqual().

//Function modified from lesson to make a spinning color wheel.

#ifdef GL_ES
precision mediump float;
#endif

#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;

//Function from Inigo Quiles
//https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0,
                     0.0,
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix( vec3(1.0), rgb, c.y);
}

float circle(vec2 s, float rad) {

  vec2 dist = s - vec2(0.5);
  return 1.0 - smoothstep(rad - (rad * 0.01), rad + (rad * 0.01), dot(dist, dist) * 8.0);
}
void main(){
  vec2 st = gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(0.0);

  //Use polar coordinates instead of Cartesian
  vec2 toCenter = vec2(0.5 - st);
    float angle = atan(toCenter.y, toCenter.x);
    float radius = length(toCenter)*2.0;

  //Add time to the angle calculation to spin it.
  vec3 colors = hsb2rgb(vec3((angle / TWO_PI) + u_time, radius, 1.0));

  vec3 outerCircle = vec3(circle(st,0.5));
  vec3 innerCircle = vec3(circle(st, 0.2));

  // Color the circle with RGB, then subtract the inner circle.

  color = outerCircle * colors - innerCircle;

    gl_FragColor = vec4(color,1.0);
}
