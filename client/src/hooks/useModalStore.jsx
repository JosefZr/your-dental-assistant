import {create } from "zustand"

export const MODAL_TYPE = {
    CREATE_SERVER: "createServer",
    EDIT_SERVER: "editServer",
    INVITE_PEAPLE:"invitePeople",
    MANAGE_MEMBERS:"manageMembers",
    CREATE_CHANNEL:"createChannel",
    EDIT_CHANNEL:"editChannel",
    DELETE_COURSE:"deleteCourse",
    UPDATE_USERNAME:"updateUsername",
    UPDATE_PASSWORD:"updatePassword",
    UPDATE_EMAIL:"updateEmail",
    SUBSCRIPTION:"subscription",
    PROFFESSION:"proffession",
    DELETE_USER:"deleteUser",
    CREATE_STORE:"addStore",
    USER_PREVIEW:"userPreview",
    BIR:"bir",
    SEARCH_MODAL:"searchModal",
    VIDEO_MODAL:"videoModal",
    CREATE_EVENT:"createEvent",
    SUNNAH_REMINDER:"sunnahReminder",
    ADD_MODAL:"addModal",
    LIMITATION_MODAL:"limitaionModal",
    IMAGES_MODAL:"imagesModal",
    LEVEL_MODAL:"level_modal",
    JOB_DETAILS:"jobDetails",
    ADD_ROLE:"addRole",
    EXTEND_SUBSCRIPTION:"extendSubscription"
  };

export const useModal = create((set)=>({
    type:null,
    isOpen:false,
    onOpen:(type)=> set({isOpen:true, type}),
    onClose:()=>set({isOpen:false, type:null})
}));