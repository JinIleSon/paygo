import Card from "../../components/common/card";

function OrderDetailPage() {
    return (
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-6.5 font-medium">
                        <Card>

                        </Card>
                    </div>
                </div>
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-4 font-medium">
                        <Card>
                            
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailPage;