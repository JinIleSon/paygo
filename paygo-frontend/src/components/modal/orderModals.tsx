// 주문 모달 모음

import { COLOR_NAMES } from "../../constants/color";
import type { OrderModalState } from "../../types/order";
import ConfirmModal from "./confirmModal";
import ReturnRequestModal from "./returnRequestModal";
import ShippingModal from "./shippingModal";

interface OrderModalsProps {
    modal: OrderModalState;
    onClose: () => void;
}

function OrderModals({modal, onClose} : OrderModalsProps){
    if (!modal) return null;
    const { type, order } = modal;

    return (
        <>
            {type === 'cancel' && (
                <ConfirmModal
                    title="주문을 취소할까요?"
                    description={`취소하면 결제 금액 ${order.totalPrice.toLocaleString()}원이 7일 뒤에 환불돼요. 배송이 이미 시작된 경우 취소가 제한될 수 있어요.`}
                    cancelLabel="아니오"
                    variant="cancel"
                    confirmLabel="취소하기"
                    onClose={onClose}
                    // TODO: 이후 API 호출 필요
                    onConfirm={onClose}
                ></ConfirmModal>
            )}
            {type === 'repurchase' && (
                <ConfirmModal
                    title="다시 구매할까요?"
                    description={`${order.items.map((item) => item.productName).join(', ')}를 같은 옵션으로 장바구니에 담아요.`}
                    cancelLabel="아니오"
                    variant="retry"
                    confirmLabel="장바구니에 담기"
                    onClose={onClose}
                    // TODO: 이후 API 호출 필요
                    onConfirm={onClose}
                ></ConfirmModal>
            )}
            {type === 'reorder' && (
                <ConfirmModal
                    title="재주문할까요?"
                    description={`이전과 동일한 상품, 수량으로 다시 주문해요.`}
                    subDescription="재고 부족으로 실패했던 주문은 재고 확인 후 결제가 진행돼요."
                    cancelLabel="아니오"
                    variant="retry"
                    confirmLabel="재주문"
                    onClose={onClose}
                    // TODO: 이후 API 호출 필요
                    onConfirm={onClose}
                ></ConfirmModal>
            )}
            {type === 'confirm' && (
                <ConfirmModal
                    title="구매를 확정할까요?"
                    description={`${order.items[0].productName}${order.items.length > 1 ? ` 외 ${order.items.length - 1}개` : ''} 구매를 확정해요. 구매 확정 후에는 반품 신청을 할 수 없어요.`}
                    subDescription="상품에 문제가 있다면 구매 확정 전에 반품 신청을 해주세요."
                    cancelLabel="아니오"
                    variant="confirm"
                    confirmLabel="구매 확정"
                    onClose={onClose}
                    // TODO: 이후 API 호출 필요
                    onConfirm={onClose}
                ></ConfirmModal>
            )}
            {type === 'return' && (
                <ReturnRequestModal
                    title="반품 신청"
                    description={`${order.items
                    .map((item) => 
                        [item.productName, item.size, COLOR_NAMES[item.color], `${item.count}개`]
                        .filter((i) => i !== undefined)
                        .join(' · ')
                    )
                    .join('\n')}`}
                    category="사유"
                    text="상세 사유 (선택)"
                    cancelLabel="취소"
                    confirmLabel="신청하기"
                    onClose={onClose}
                    // TODO: API 연동 시 변경 필요
                    onConfirm={onClose}
                >

                </ReturnRequestModal>
            )}
            {type === 'returnCancel' && (
                <ConfirmModal
                    title="반품 신청을 취소할까요?"
                    description="반품 신청을 취소하면 주문이 배송완료 상태로 돌아가요."
                    cancelLabel="아니오"
                    variant="cancel"
                    confirmLabel="취소하기"
                    onClose={onClose}
                    // TODO: 이후 API 호출 필요
                    onConfirm={onClose}
                ></ConfirmModal>
            )}
            {type === 'tracking' && (
                <ShippingModal
                    title="배송 조회"
                    orderNumber={order.orderNumber}
                    productName={order.items[0].productName}
                    count={order.items.length - 1}
                    orderStatus={order.orderStatus}
                    isOrderDetailPage={false}
                    closeLabel="닫기"
                    createdAt={order.createdAt}
                    onClose={onClose}
                >
                </ShippingModal>
            )} 
        </>
    );
}

export default OrderModals;