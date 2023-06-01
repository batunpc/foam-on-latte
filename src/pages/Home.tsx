import { Canvas } from '@react-three/fiber';

function Sphere(props: any) {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

function Home() {
  return (
    <div className="flex flex-grow items-center justify-center">
      <h1 className="flex flex-col text-4xl font-bold tracking-tight text-secondary sm:text-6xl uppercase">
        <span>foam</span>
        <span>on</span>
        <span>latte</span>
        <span className="text-2xl">.tech</span>
      </h1>
      <div>
        <Canvas>
          <Sphere position={[0, 0, 0]} />

          <Sphere position={[-2, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
}

export default Home;
