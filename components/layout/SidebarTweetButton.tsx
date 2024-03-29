import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { MdOutlineLocalPostOffice } from "react-icons/md";


const SidebarTweetButton = () => {
    const router = useRouter();
    const LoginModal = useLoginModal();

    const onClick = useCallback(() =>{
        LoginModal.onOpen();
    }, [LoginModal]);

    return ( 
        <div onClick={onClick}>
            <div className="
                mt-6
                lg:hidden
                rounded-full
                h-14
                w-14
                p-4
                flex
                items-center
                justify-center
                bg-yellow-500
                hover:bg-opacity-80
                transition
                cursor-pointer
            ">
                <MdOutlineLocalPostOffice size={24} color="white" />
            </div>
            <div className="
                mt-6
                hidden
                lg:block
                px-4
                py-2
                rounded-full
                bg-yellow-500
                hover:bg-opacity-90
                cursor-pointer
                transition

            ">
                <p className="
                    hidden
                    lg:block
                    text-center
                    font-semibold
                    text-white
                    text-[20px]
                ">
                    Post
                </p>
            </div>
        </div>
     );
}
 
export default SidebarTweetButton;