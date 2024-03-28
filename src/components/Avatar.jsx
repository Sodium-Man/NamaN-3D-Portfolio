import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

export function Avatar(props) {
  const { nodes, materials } = useGLTF("models/6603efe1676c04edeb1ee00b.glb");

  // animations
  const { animations: typingAnimation } = useFBX("animations/Typing.fbx");

  typingAnimation[0].name = "Typing";

  const [animation, setAnimation] = useState("Typing");

  const group = useRef();

  const { actions } = useAnimations(
    [
      typingAnimation[0],
    ],
    group
  );

  useEffect(() => {
    console.log("animation :", animation);
    actions[animation].reset().fadeIn(0.5).play();
    return () => actions[animation].fadeOut(0.5);
  }, [animation, actions]);

  return (
    <group {...props} ref={group} dispose={null}>
    <primitive object={nodes.Hips} />
    <skinnedMesh
      name="EyeLeft"
      geometry={nodes.EyeLeft.geometry}
      material={materials.Wolf3D_Eye}
      skeleton={nodes.EyeLeft.skeleton}
      morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
      morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      frustumCulled={false}
      />
    <skinnedMesh
      name="EyeRight"
      geometry={nodes.EyeRight.geometry}
      material={materials.Wolf3D_Eye}
      skeleton={nodes.EyeRight.skeleton}
      morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
      morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      frustumCulled={false}
      />
    <skinnedMesh
      name="Wolf3D_Head"
      geometry={nodes.Wolf3D_Head.geometry}
      material={materials.Wolf3D_Skin}
      skeleton={nodes.Wolf3D_Head.skeleton}
      morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      frustumCulled={false}
      />
    <skinnedMesh
      name="Wolf3D_Teeth"
      geometry={nodes.Wolf3D_Teeth.geometry}
      material={materials.Wolf3D_Teeth}
      skeleton={nodes.Wolf3D_Teeth.skeleton}
      morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      frustumCulled={false}
      />
    <skinnedMesh
      geometry={nodes.Wolf3D_Hair.geometry}
      material={materials.Wolf3D_Hair}
      skeleton={nodes.Wolf3D_Hair.skeleton}
      frustumCulled={false}
      />
    <skinnedMesh
      geometry={nodes.Wolf3D_Glasses.geometry}
      material={materials.Wolf3D_Glasses}
      skeleton={nodes.Wolf3D_Glasses.skeleton}
      frustumCulled={false}
      />
    <skinnedMesh
      geometry={nodes.Wolf3D_Body.geometry}
      material={materials.Wolf3D_Body}
      skeleton={nodes.Wolf3D_Body.skeleton}
      frustumCulled={false}
      />
    <skinnedMesh
      geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
      material={materials.Wolf3D_Outfit_Bottom}
      skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      frustumCulled={false}
      />
    <skinnedMesh
      geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
      material={materials.Wolf3D_Outfit_Footwear}
      skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      frustumCulled={false}
      />
    <skinnedMesh
      geometry={nodes.Wolf3D_Outfit_Top.geometry}
      material={materials.Wolf3D_Outfit_Top}
      skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
  frustumCulled={false}
      />
  </group>
  );
}

useGLTF.preload("models/6603efe1676c04edeb1ee00b.glb");
