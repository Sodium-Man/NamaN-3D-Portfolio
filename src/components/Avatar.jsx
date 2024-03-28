import React, { useRef, useEffect } from 'react';
import { useGLTF, useFBX, useAnimations } from '@react-three/drei';

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('models/6603efe1676c04edeb1ee00b.gltf');

  const { animations: typingAnimation } = useFBX('animations/Typing.fbx');

  typingAnimation[0].name = 'Typing';
  console.log(typingAnimation);

  const { actions } = useAnimations(typingAnimation, group);

  useEffect(() => {
    actions['Typing'].reset().play();
  }, []);

  return (
    <group {...props} ref = {group} dispose={null}>
      <mesh geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} />
      <mesh geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} />
      <mesh geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} />
      <mesh geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} />
      <mesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} />
      <mesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} />
      <mesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} />
      <mesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} />
      <mesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} />
      <mesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} />
    </group>
  );
}

useGLTF.preload('models/6603efe1676c04edeb1ee00b.gltf');
