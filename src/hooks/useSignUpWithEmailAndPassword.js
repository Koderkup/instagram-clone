import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { useToast } from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { json } from "react-router-dom";
const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
     const toast = useToast();
  const signup = async (inputs) => {
    try {
      if (
        !inputs.email ||
        !inputs.password ||
        !inputs.username ||
        !inputs.fullName
      ) {
        toast({
          title: "Error",
          description: "Please fill all fields",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        console.log(error);
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
          following: [],
          followers: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc))
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
