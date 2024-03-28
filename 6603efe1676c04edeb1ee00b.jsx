/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/6603efe1676c04edeb1ee00b.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/6603efe1676c04edeb1ee00b.gltf')
  return (
    <group {...props} dispose={null}>
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
  )
}

useGLTF.preload('/6603efe1676c04edeb1ee00b.gltf')
