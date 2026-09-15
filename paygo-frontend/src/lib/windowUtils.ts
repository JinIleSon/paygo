import { POPUP_HEIGHT, POPUP_WIDTH } from "../constants/windowPopup";

export function handleTermsLinkClick(link: string, name: string) {
    const left = window.screenX + (window.outerWidth - POPUP_WIDTH) / 2;
    const top = window.screenY + (window.outerHeight - POPUP_HEIGHT) / 2;

    window.open(
        link,
        name, // 창 이름 - 동일 이름이면 재클릭 시 새로 안 열리고 기존 창 재사용
        `width=${POPUP_WIDTH},height=${POPUP_HEIGHT},left=${left},top=${top},scrollbars=yes`
    );
}