import './Tooltip.css';
export default function TooltipContainer({ children, x, y, contentRef }) {
    return (
        <div
            style={{
                position: 'absolute',
                pointerEvents: 'none',
                left: 0,
                top: 0,
                color:'white',
                foregroundColor: 'white',
                background: '#222',
                borderRadius: '4px',
                padding:'4px',
                transform: `translate3d(${x}px, ${y}px, 0)`
            }}
        >
            <div ref={contentRef} className="tooltip">
                {children}
            </div>
        </div>
    );
}
