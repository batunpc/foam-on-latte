import {Canvas, useFrame} from '@react-three/fiber';
import {useRef} from 'react';

function Sphere(props: any) {
    return (
        <mesh {...props} scale={[1, 1, 1]}>
            <pointLight position={[10, 10, 10]}/>
            <sphereGeometry args={[1, 16, 16]}/>
            <meshStandardMaterial color="hotpink"/>
        </mesh>
    );
}

function Knot(props: any) {
    const mesh = useRef<any>();
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (
        <mesh {...props} ref={mesh} scale={[0.1, 0.1, 0.1]}>
            <pointLight position={[10, 10, 10]}/>
            <torusKnotGeometry args={[1, 0.4, 128, 16]}/>
            <meshStandardMaterial color="hotpink"/>
        </mesh>
    );
}

function Home() {
    return (
        <>
            <div className="flex flex-grow items-center justify-center">
                <h1 className="flex flex-col text-4xl font-bold tracking-tight text-secondary sm:text-6xl uppercase">
                    <span>foam</span>
                    <span>on</span>
                    <span>latte</span>
                    <span className="text-2xl">.tech</span>
                </h1>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <Canvas>
                    {/*<Sphere position={[0, 0, 0]}/>*/}
                    <Knot position={[-2, -1, 3]}/>
                </Canvas>
            </div>
        </>
    );
}

export default Home;
