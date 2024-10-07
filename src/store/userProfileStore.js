import { create } from "zustand";

const useUserProfileStore = create((set)=>({
userProfile: {},
setUserProfile: (userProfile)=>set({userProfile}),
// addPost:()
}))


export default useUserProfileStore;