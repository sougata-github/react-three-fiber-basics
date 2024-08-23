# 3D web development with React.js

React Three Fiber: React Three Fiber is a React-based library built on top of Three.js.

```bash
npm install three @types/three @react-three/fiber
```

A `mesh` in three.js is a fundamental building block for rendering any 3D object. A mesh needs a shape and a material and lighting.

`delta` is the diff in time b/w current frame and last frame

`elapsedTime` is the total time that has passed since the start of the animation.

`delta` is very small, the sine of that value is also small. Consequently, adding this tiny value to the cube's position results in almost no visible movement. Over many frames, the position might change, but the change is so gradual and minimal that it’s hard to notice.

```typescript
//for animations
useFrame((state, delta) => {});
```

```typescript
//rotating the cube
useFrame((state, delta) => {
  ref.current.rotation.x += delta;
  ref.current.rotation.y += delta;
  ref.current.rotation.z += delta;

  //   ref.current.rotation.x -= delta;
  //   ref.current.rotation.y -= delta;
  //   ref.current.rotation.z -= delta;

  //   increased speed of rotation
  //   ref.current.rotation.x += delta * 2
});
```

```typescript
//moving the cube
useFrame((state, delta) => {
  ref.current.position.y += delta;
  ref.current.position.y += delta;
  ref.current.position.z += delta;

  //   ref.current.position.y -= delta;
  //   ref.current.position.y -= delta;
  //   ref.current.position.z -= delta;

  //   increased speed of movement
  //   ref.current.position.x += delta * 2;
});
```

```typescript
useFrame((state, delta) => {
  //oscillating between 1 and -1
  ref.current.position.y = Math.sin(state.clock.elapsedTime);

  //oscillating between 0 and 1
  ref.current.position.y = Math.abs(Math.sin(state.clock.elapsedTime));
});
```

Drei is a companion library for React Three fibre.

Leva is a React-first components GUI.
