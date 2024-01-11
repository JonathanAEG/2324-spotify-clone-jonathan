import {create} from "zustand";

interface useSubscribeModalStore{

    isOpen: boolean;
    onOpen: () => void;
    onClose: ()=> void
}

const useSubscribeModal = create<useSubscribeModalStore>((set)=>({

    isOpen: false,
    onOpen: ()=>set({isOpen:true}),
    onClose: ()=>set({isOpen:false})
}))

export default useSubscribeModal;