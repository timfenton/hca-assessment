const AlertBubble: React.FC<{alertCount: number}> = ({alertCount}): React.ReactNode => {
    return (
        <div className="w-6 h-6 bg-white text-hca-alert-dark rounded-full flex items-center justify-center text-xs font-bold">
            {alertCount}
        </div>
    );
}

export default AlertBubble;